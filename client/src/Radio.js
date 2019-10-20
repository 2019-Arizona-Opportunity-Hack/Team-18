// JavaScript source code
import React, { Component } from 'react';

class Radio extends Component {
var SearchResult = React.createClass({
    getInitialState: function () {
        return {
            gender: '',

        };
    },
    onGenderChanged: function (e) {
        this.setState({
            site: e.currentTarget.value
        });
    },

    render: function () {
        var resultRows = this.props.data.map(function (result) {
            return (
                <tbody>
                    <tr>
                        <td><input type="radio" gender="gender_type"
                            value={result.GENDER}
                            checked={this.state.gender === result.GENDER}
                            onChange={this.onGenderChanged} />{result.GENDER}</td>

                    </tr>
                </tbody>
            );
        }, this);
        return (
            <table classGender="table">
                <thead>
                    <tr>
                        <th>Gender</th>
                    </tr>
                </thead>
                {resultRows}
                <tfoot>
                    <tr>
                        <td>chosen site name {this.state.gender} </td>
                    </tr>
                </tfoot>
            </table>
        );
    }
});

var App = React.createClass({
    render: function () {
        return <div><SearchResult data={[
            { GENDER: ' ' },

        ]} /></div>
    }
});
}
React.render(<App />, document.body);
export default Radio; 