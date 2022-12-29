module.exports = ({ menue, name, address, mobile, date, aguest, cguest, notes}) => {
    const today = new Date();
 
 

return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 7px solid #ff1b2d;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 20px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  src="https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Customer name: ${name}
                            </td>
                            <td>
                               Receipt number: 007
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td> </td>
                   <td> </td>
                </tr>
                <tr class="item">
                   <td>Customer Name:</td>
                   <td>${name}</td>
                </tr>

                <tr class="item">
                   <td>Menue:</td>
                   <td>${menue}</td>
                </tr>

                <tr class="item">
                   <td>Address:</td>
                   <td>${address}</td>
                </tr>
                
                </tr>
                <tr class="item">
                   <td>Mobile number:</td>
                   <td>${mobile}</td>
                </tr>

                </tr>
                <tr class="item">
                   <td>Date:</td>
                   <td>${date}</td>
                </tr>

                </tr>
                <tr class="item">
                   <td>No of adult guests:</td>
                   <td>${aguest}</td>
                </tr>

                </tr>
                <tr class="item">
                   <td>No of child guests:</td>
                   <td>${cguest}</td>
                </tr>

                </tr>
                <tr class="item">
                   <td>Special requests:</td>
                   <td>${notes}</td>
                </tr>

             </table>
             <br />
             <h1 class="justify-center">PAID</h1>
          </div>
       </body>
    </html>
    `;
};