import * as React from "react";
import { Grid, FormControl, TextField, Button, Container, Select, MenuItem, InputLabel } from "@mui/material";
import { useMutation } from "react-query";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import {requestLoan} from "../query/loan";
import { useState } from "react";
import BalanceSheet from "./BalanceSheet";
export default function LoanApplication() {

    const defaultValues = {
        RegistrationNumber: "",
        BusinessName: "",
        EstablishedYear: "",
        AccountingProvider: "",
        RequestedAmt: 0,
        LoanPeriodInMonths: 0,

    };
    var businessData={};
    const { control, handleSubmit, reset } = useForm({ defaultValues });
    const [fetchedData, setFetchedData] = useState(false);
    const [balanceSheet,setBalanceSheet]= useState();
    const balanceSheetMutation = useMutation(requestLoan, {
        onError: (msg) => {
            Swal.fire(
                "Error!",
                `Oops something wrong with the server! Status code ${msg}`,
                "error"
              );
        },
        onSuccess: (data) => {
            if (data.status === 200) {
                setFetchedData(true);
                setBalanceSheet(<BalanceSheet sheetData={data.data} businessDetail={businessData}/>)
            }
            else{
                Swal.fire(
                    "Error!",
                    `Oops something wrong with the server!`,
                    "error"
                  );
            }

        }
    })
    const onSubmit = (data) => {
        businessData = data;
        balanceSheetMutation.mutate(data);
    }
    

    return (

        <div className="components">

                <h2 align="center">Apply for Loan</h2>
                <Container maxWidth="xl">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={4}>

                            <Grid item lg={6} md={6} xs={12} >
                                <FormControl required sx={{ width: "100%" }}>
                                    <Controller
                                        name="BusinessName"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                type="text"
                                                value={value}
                                                onChange={(e) => {
                                                    onChange(e);
                                                    setBalanceSheet();
                                                }}
                                                name="BusinessName"
                                                label="Business Name"
                                                variant="outlined"
                                                required
                                                autoFocus
                                            />
                                        )}
                                    >
                                    </Controller>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12} >
                                <FormControl required sx={{ width: "100%" }}>
                                    <Controller
                                        name="RegistrationNumber"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                type="text"
                                                value={value}
                                                onChange={(e) => {
                                                    onChange(e);
                                                    setBalanceSheet();
                                                }}

                                                name="RegistrationNumber"
                                                label="Registration Number"
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    >
                                    </Controller>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12} >
                                <FormControl required sx={{ width: "100%" }}>
                                    <Controller
                                        name="EstablishedYear"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                type="number"
                                                value={value}
                                                onChange={(e) => {
                                                    onChange(e);
                                                    setBalanceSheet();
                                                }}
                                                InputProps={{
                                                    inputProps: { min: 1800, max: 2022 }
                                                }}
                                                name="EstablishedYear"
                                                label="Established Year"
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    >
                                    </Controller>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12} >
                                <FormControl required sx={{ width: "100%" }}>
                                    <Controller
                                        name="AccountingProvider"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <>
                                                <Select
                                                    label="Accounting Provider *"
                                                    id="AccountingProvider"
                                                    name="AccountingProvider"
                                                    value={value}
                                                    onChange={(e) => {
                                                        onChange(e);
                                                        setBalanceSheet();
                                                      }}
                                                    autoWidth>
                                                    <MenuItem value="Xero">Xero</MenuItem>
                                                    <MenuItem value="MYOB">MYOB</MenuItem>
                                                </Select>
                                                <InputLabel>Accounting Provider</InputLabel>
                                            </>
                                        )}
                                    >
                                    </Controller>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12} >
                                <FormControl required sx={{ width: "100%" }}>
                                    <Controller
                                        name="RequestedAmt"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                type="number"
                                                value={value}
                                                onChange={(e) => {
                                                    onChange(e);
                                                    setBalanceSheet();
                                                }}
                                                name="RequestedAmt"
                                                label="Requested Loan Amount"
                                                variant="outlined"
                                                InputProps={{
                                                    inputProps: { min: 1 }
                                                }}
                                                required
                                            />
                                        )}
                                    >
                                    </Controller>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12} >

                                <FormControl required sx={{ width: "100%" }}>
                                    <Controller
                                        name="LoanPeriodInMonths"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                type="number"
                                                value={value}
                                                onChange={(e) => {
                                                    onChange(e);
                                                    setBalanceSheet();
                                                }}
                                                name="LoanPeriodInMonths"
                                                label="Loan Period In Months"
                                                variant="outlined"
                                                InputProps={{
                                                    inputProps: { min: 1 }
                                                }}
                                                required
                                            />

                                        )}
                                    >
                                    </Controller>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6} md={6} />
                            <Grid item lg={3} md={3} xs={6} >
                                <FormControl sx={{ width: "100%" }}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="large"
                                        type="submit"
                                        sx={{ textTransform: "none" }}>
                                        Get BalanceSheet
                                    </Button>
                                </FormControl>
                            </Grid>
                            <Grid item lg={3} md={3} xs={6} >
                                <FormControl sx={{ width: "100%" }}>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        size="large"
                                        sx={{ textTransform: "none" }}
                                        onClick={() => {
                                            reset(defaultValues);
                                            setFetchedData(false);
                                        }}>
                                        Clear
                                    </Button>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </form>
                </Container>
                {fetchedData?(
                        balanceSheet
                    ):""}
        </div>

    )

}