import React from "react";
import '../index.css';
export default function Vieworder () {
    const btn3={ backgroundColor: 'forestgreen', border: '2px solid white', padding: '2px'}
    const btn4={ backgroundColor: 'teal', padding: '2px', border: '2px solid white'}
    const btn5={ backgroundColor: 'gold', padding: '2px', border: '2px solid white'}
    const td={justifyContent: 'spacebetween'}
    
        return (
            <div className="container">
                <table className="table">
                    <tr className="tr">
                        <th>Order</th>
                        <th>Customer</th>
                        <th>Description</th>
                        <th>Date Recieved</th>
                        <th>Amount</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                    
                    <tr className="tr1">
                        <td>from db</td>
                        <td>from db</td>
                        <td>from db</td>
                        <td>from db</td>
                        <td>from db</td>
                        <td>from dffffffffffb</td>
                    <td style={td}>
                    <a className="btn1" style={btn3} href='addpayment.php?id=$data[id]' >Add Payment</a>
                    <a className="btn1" style={btn4} href='printinvoice.php?id=$data[id]' >Receipt</a>
                    <a className="btn1" style={btn5} href='orderedit.php?id=$data[id]' >Update</a>
                    <a className="btn2" href='orderlist.php?id=$data[id]'><button type='button' class='btn btn-danger btn-xs'>DELETE</button></a>
                    </td>
                    </tr>

                </table>
            </div>

        );
}