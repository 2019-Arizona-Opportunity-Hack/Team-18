# Team-18

Our application allows useres to create an oline version of any document such as a voter form. This automatically links the non-programmer to the backend in a specific format

## Getting Started

The component app is in the client folder and it has two major components, CreateForm and its ListAdder. 

## Installation

Run the following to install in your local react project and copy the two components over.
```
npm install @material-ui/core
```

## Usage

Use the CreateForm component as the main component. Make sure ListAdder in the same directory since CreateForm is dependent on that componenet. The ```updateDatabase``` function in CreateForm component is called whenever the question page is navigating. Use this block to send api request back to the server as needed to run server logic.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Material UI](https://material-ui.com/) - UI framework used