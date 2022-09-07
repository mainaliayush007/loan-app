import * as React from "react";
import PropTypes from "prop-types";
import {useMutation} from "react-query";
import {requestOutcome} from "../query/loan";

import { Grid, Button, Container, TableCell, TableHead, TableRow, Table, TableBody } from "@mui/material";
import Swal from "sweetalert2";

export default function BalanceSheet({ sheetData, businessDetail }) {
    const balanceSheet = sheetData.balance_sheet
    const mutation = useMutation(requestOutcome,{
        onError:(msg) =>{
            Swal.fire(
                "Error!",
                `Oops something wrong with the server! Status code ${msg}`,
                "error"
              );
        },
        onSuccess:(data)=>{
            if(data.status===200){
                
                Swal.fire(
                    {
                    icon: "success",
                    title: "Success!",
                    html: `<b>Loan Amount Requested:</b> ${data.data["Loan Amount"]}<br/>
                    <b>Loan Percentage Approved:</b>  ${data.data["Loan Percentage Approved"]} %`,
                    showConfirmButton: true,
                    }
                );
                // console.log(data);
            }
            

        }
    })
    return (
        <div className="components">

            <h3 align="center">Review Balance Sheet</h3>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item lg={12} md={12} xs={12} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>S.No.</b></TableCell>
                                    <TableCell><b>Year</b></TableCell>
                                    <TableCell><b>Month</b></TableCell>
                                    <TableCell><b>Profit / Loss</b></TableCell>
                                    <TableCell><b>Assets value</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {balanceSheet.map((balanceData, index) => (
                                <TableRow key={balanceData.year+index+1} >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{balanceData.year}</TableCell>
                                    <TableCell>{balanceData.month}</TableCell>
                                    <TableCell>{balanceData.profitOrLoss}</TableCell>
                                    <TableCell>{balanceData.assetsValue}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item lg={9} md={9} xs={6} />
                <Grid item lg={3} md={3} xs={6} >
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        type="submit"
                        sx={{ textTransform: "none",width: "100%" }}
                        onClick={()=>{
                            
                           mutation.mutate({businessDetail,balanceSheet})
                           console.log({businessDetail,balanceSheet})
                        }}
                        >
                        Submit Application
                    </Button>
                </Grid>
                </Grid>
                
            </Container>
        </div>

    )



}
BalanceSheet.propTypes = {
    sheetData: PropTypes.shape({
        registrationNumber: PropTypes.string,
        balance_sheet: PropTypes.arrayOf(
            PropTypes.shape({
                year: PropTypes.number,
                month: PropTypes.number,
                profitOrLoss: PropTypes.number,
                assetsValue: PropTypes.number
            })
        )
    }),
    businessDetail:PropTypes.shape({
        RegistrationNumber:PropTypes.string,
        BusinessName: PropTypes.string,
        EstablishedYear: PropTypes.string,
        AccountingProvider: PropTypes.string,
        RequestedAmt:PropTypes.string,
        LoanPeriodInMonths:PropTypes.string
    })
}
