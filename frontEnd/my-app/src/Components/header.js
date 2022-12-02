import React from "react";
// import {Link} from 'react-router-dom';
import axios from 'axios';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName:[],
            bookCart:[],
            bookbyName:[]
        }
    }
    handleClickListBook = () => {
        axios({
            method:'GET',
            url:"http://localhost:4000/api/getAllBooks",
            headers:{"Content-Type":"application/json"}
        }).then(result => {
            this.setState({
                bookName:result.data.response.map(item => item.name)
            })
            // alert(result.data.response.map(item => item.name));
        }).catch(error => {
            alert(error);
        });
        
    }
    handleClickCart = () => {
        const bookCart = this.state.bookCart;
        const bookCartReq = {
            name:bookCart
        }
        console.log(bookCart);
        axios({
            method:"POST",
            url:"http://localhost:4000/api/addItem",
            headers:{"Content-Type":"application/json"},
            data:bookCartReq
        }).then(result => {
            alert(`Book added to cart successfully`);
        }).catch(error => {
            alert(error);
        });
        


        // alert("Hello");
    }
    bookListClickHandler = (event) => {
        const id = event.target.getAttribute("data-index");
        this.setState({
            bookCart:this.state.bookName[id]
        })
        console.log(this.state.bookCart);
        // console.log(event.target.datset.index);
        // this.setState({
        //     bookCart:event.dataset.index
        // })
        // alert(this.state.bookCart);
        // alert(event.dataset.index);
    }
    handeleChange = (event) => {
        this.setState({
            bookbyName:event.target.value
        })
        console.log(this.state.bookbyName);
    }
    searchHandler = () => {
        const {bookbyName} = this.state;
        const searchReq = {
            name:bookbyName
        }
        axios({
            method:'POST',
            url:"http://localhost:4000/api/getbookbyName",
            headers:{"Content-Type":"application/json"},
            data:searchReq
        }).then(result => {
            this.setState({
                bookbyName:result.data.response.map(item => item.name)
            })
            // alert(result.data.response.map(item => item.name));
            // console.log(this.state.bookbyName);

        }).catch(error => {
            alert(error);
        });
    }
    
    render() {
        const {bookName} = this.state;
        const {bookCart} = this.state;
        return(
            <>
                <div className="containder-style">
                    <span className="list-book" onClick = {this.handleClickListBook}>List Book</span>
                    <input type="text" className="input-style" placeholder="Please Search book by name"
                     onChange={(event) => this.handeleChange(event,"bookbyName")} name="bookName"/>
                    <button className="search" onClick={this.searchHandler}>Search</button>
                    <span className="book-cart" onClick={this.handleClickCart}>BooksCart
                        {
                            bookCart
                        }
                    
                    </span>

                </div>
                <ul>
                    {
                        bookName.map((item,index) => {
                            return <li key={index} data-index={index} onClick={this.bookListClickHandler}>{item}</li>
                        })
                    }
                </ul>
                {/* <ol>
                    {
                        bookCart.map((item,index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                    <li>{bookCart}</li>
                </ol> */}
                {/* <ol>
                    <li>{bookbyName}</li>
                </ol> */}
                
                {/* <ul>
                    {
                        bookbyName.map((item,index) => {
                            return <li key={index}>{item}</li>
                        })
                        
                    }
                    

                </ul> */}
            
            
            
            </>
        )
    }
}
export default Header;