package main

import (
	"fmt"
	"os"

	"github.com/bojand/ghz/printer"
	"github.com/bojand/ghz/runner"
)

func main() {
	report, err := runner.Run(
		"users.Users/GetUser",
		"localhost:3000",
		runner.WithProtoFile("../../proto/users.proto", []string{}),
		runner.WithDataFromFile("../data/getUser.json"),
		runner.WithInsecure(true),
	)

	if err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}

	printer := printer.ReportPrinter{
		Out:    os.Stdout,
		Report: report,
	}

	printer.Print("pretty")
}
