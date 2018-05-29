import React from 'react';
let MyJSON = require('./new.json');



class App extends React.Component {

    constructor(props){
        super(props);
        console.log(MyJSON);
    }

    fetchData(){
        fetch('http://toktogul.com.kg/api/blog')
            .then((res) => { return res.json() })
            .then((data) => { 
                let result = '<h2> News Info </h2>';
                data.forEach((news) => {
                    result +=
                     `<h4> Text: ${news.text} </h4>
                     <ul class="w3-ul">
                       <li> Phone : ${news.phone}</li>
                       <li> Created : ${news.created} </li>
                       <li> Image : ${news.photo_url} </li>
                    </ul>
                     `;
                document.getElementById('result').innerHTML = result;
                });
            
        })
    }
    

    render() {
        return (
            <div>
                <p>
                    <input type="submit" className="button" value="Взять данные из API" id="fetchData" onClick={this.fetchData}/>
                </p>       
                <div id="result"></div>
            </div>
        );
    }
}

export default App;
