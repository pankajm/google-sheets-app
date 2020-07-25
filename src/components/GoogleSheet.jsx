/** Parent component where table will be rendered once data is fetched */

import React, { Component } from 'react';
import config from "../config";
import Table from './Table';
import Spinner from './common/Spinner';
import Input from './common/Input';

class GoogleSheet extends Component {
  state = {
    sheetData: { columns: [], data: [] },
    showSpinner: false,
    url: ""
  }

  getSpreadSheetId = () => {
    const params = this.state.url.match(/.*\/(.*)\/(.*)$/);
    return params[1];
  }

  load = (callback) => {
    this.setState({ showSpinner: true })
    this.getSpreadSheetId();
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: this.getSpreadSheetId(),
          range: "Sheet1!A1:D1000"  // Will load 1000 rows, number is just for tesing purpose
        })
        .then(
          response => {
            const data = response.result.values;
            callback({ data })

          },
          response => {
            callback(false, response.result.error);
            console.log("got error");
          }
        );
    });
  }

  mapDataToTable = (data) => {
    const { data: tableData } = data;
    const headers = tableData[0];
    const body = tableData.slice(1, tableData.length)
    let headersArray = [];
    let bodyArray = [];
    headersArray = headers.map(h => { return { label: h } });
    bodyArray = body.map(d => { return d });
    const sheetData = { columns: [...headersArray], data: [...bodyArray] }
    this.setState({
      sheetData, showSpinner: false
    });
  }

  onDataLoad = (data, error) => {
    if (error) {
      console.log(error);
    }
    this.mapDataToTable(data);
  };

  initClient = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        this.load(this.onDataLoad);
      });
  };

  handleChange = ({ currentTarget: input }) => {
    this.setState({ url: input.value })
  }

  handleButtonClick = () => {
    window.gapi.load("client", this.initClient);
  }

  render() {
    const { columns, data } = this.state.sheetData;
    return (
      <div>
        <h1>Google Sheet Data</h1>
        <Input name="urlInput" label="Enter the Google Sheet url"
          onChange={this.handleChange} value={this.state.url} onButtonClick={this.handleButtonClick}></Input>
        <Table columns={columns} data={data} />
        <Spinner showSpinner={this.state.showSpinner} />
      </div>
    );
  }
}

export default GoogleSheet;