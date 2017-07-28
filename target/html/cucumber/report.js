$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddNumbers.feature");
formatter.feature({
  "line": 2,
  "name": "Add Two Numbers",
  "description": "As a user\r\nI want to use a calculator\r\nSo that I don\u0027t need to calculate myself",
  "id": "add-two-numbers",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@comp-addnum"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Add two numbers",
  "description": "",
  "id": "add-two-numbers;add-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@progression"
    },
    {
      "line": 7,
      "name": "@unit"
    },
    {
      "line": 7,
      "name": "@junit"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I add \"\u003ca\u003e\" and \"\u003cb\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the result should be \"\u003csum\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "add",
  "description": "",
  "id": "add-two-numbers;add-two-numbers;add",
  "rows": [
    {
      "cells": [
        "a",
        "b",
        "sum"
      ],
      "line": 14,
      "id": "add-two-numbers;add-two-numbers;add;1"
    },
    {
      "cells": [
        "2",
        "3",
        "5"
      ],
      "line": 15,
      "id": "add-two-numbers;add-two-numbers;add;2"
    },
    {
      "cells": [
        "2",
        "0",
        "3"
      ],
      "line": 16,
      "id": "add-two-numbers;add-two-numbers;add;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 461857,
  "status": "passed"
});
formatter.before({
  "duration": 10159135,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add two numbers",
  "description": "",
  "id": "add-two-numbers;add-two-numbers;add;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@progression"
    },
    {
      "line": 7,
      "name": "@unit"
    },
    {
      "line": 1,
      "name": "@comp-addnum"
    },
    {
      "line": 7,
      "name": "@junit"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I add \"2\" and \"3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the result should be \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "duration": 356167154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    },
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "CalculatorSteps.i_add_and(int,int)"
});
formatter.result({
  "duration": 3188521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    }
  ],
  "location": "CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 156945,
  "status": "passed"
});
formatter.after({
  "duration": 22238,
  "status": "passed"
});
formatter.before({
  "duration": 245469,
  "status": "passed"
});
formatter.before({
  "duration": 32929,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Add two numbers",
  "description": "",
  "id": "add-two-numbers;add-two-numbers;add;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@progression"
    },
    {
      "line": 7,
      "name": "@unit"
    },
    {
      "line": 1,
      "name": "@comp-addnum"
    },
    {
      "line": 7,
      "name": "@junit"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I add \"2\" and \"0\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the result should be \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "duration": 86384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    },
    {
      "val": "0",
      "offset": 15
    }
  ],
  "location": "CalculatorSteps.i_add_and(int,int)"
});
formatter.result({
  "duration": 180466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 981445,
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c2\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat com.coe.steps.CalculatorSteps.the_result_should_be(CalculatorSteps.java:34)\r\n\tat ✽.Then the result should be \"3\"(AddNumbers.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 23948,
  "status": "passed"
});
formatter.uri("CalculatePayableEmi.feature");
formatter.feature({
  "line": 2,
  "name": "Calculate payable EMI",
  "description": "",
  "id": "calculate-payable-emi",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@idbi"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Valid Loan Details",
  "description": "",
  "id": "calculate-payable-emi;valid-loan-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    },
    {
      "line": 7,
      "name": "@system"
    },
    {
      "line": 7,
      "name": "@web-http"
    },
    {
      "line": 7,
      "name": "@selenium"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User provides loan amount as \"\u003camount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Loan rate and term as rate and term respectively",
  "rows": [
    {
      "cells": [
        "name:lnRate",
        "9"
      ],
      "line": 11
    },
    {
      "cells": [
        "name:lnTerm",
        "24"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System shows expected emi as \"\u003cemi\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "valid",
  "description": "",
  "id": "calculate-payable-emi;valid-loan-details;valid",
  "rows": [
    {
      "cells": [
        "amount",
        "emi"
      ],
      "line": 18,
      "id": "calculate-payable-emi;valid-loan-details;valid;1"
    },
    {
      "cells": [
        "12300000",
        "561922.33"
      ],
      "line": 19,
      "id": "calculate-payable-emi;valid-loan-details;valid;2"
    },
    {
      "cells": [
        "40000",
        "1827.39"
      ],
      "line": 20,
      "id": "calculate-payable-emi;valid-loan-details;valid;3"
    },
    {
      "cells": [
        "",
        "NaN"
      ],
      "line": 21,
      "id": "calculate-payable-emi;valid-loan-details;valid;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17711408457,
  "status": "passed"
});
formatter.before({
  "duration": 32073,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to website",
  "keyword": "Given "
});
formatter.match({
  "location": "EmiCalculatorSteps.navigate_to_website()"
});
formatter.result({
  "duration": 5019370181,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Valid Loan Details",
  "description": "",
  "id": "calculate-payable-emi;valid-loan-details;valid;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@web-http"
    },
    {
      "line": 7,
      "name": "@system"
    },
    {
      "line": 1,
      "name": "@idbi"
    },
    {
      "line": 7,
      "name": "@regression"
    },
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@selenium"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User provides loan amount as \"12300000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Loan rate and term as rate and term respectively",
  "rows": [
    {
      "cells": [
        "name:lnRate",
        "9"
      ],
      "line": 11
    },
    {
      "cells": [
        "name:lnTerm",
        "24"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System shows expected emi as \"561922.33\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12300000",
      "offset": 30
    }
  ],
  "location": "EmiCalculatorSteps.enter_loan_amount(String)"
});
formatter.result({
  "duration": 490372000,
  "status": "passed"
});
formatter.match({
  "location": "EmiCalculatorSteps.provide_valid_loan_details(String,String\u003e)"
});
formatter.result({
  "duration": 422535524,
  "status": "passed"
});
formatter.match({
  "location": "EmiCalculatorSteps.calculate_emi()"
});
formatter.result({
  "duration": 3134206128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "561922.33",
      "offset": 30
    }
  ],
  "location": "EmiCalculatorSteps.verify_emi(String)"
});
formatter.result({
  "duration": 3139151415,
  "status": "passed"
});
formatter.after({
  "duration": 524805977,
  "status": "passed"
});
formatter.before({
  "duration": 5442758858,
  "status": "passed"
});
formatter.before({
  "duration": 62864,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to website",
  "keyword": "Given "
});
formatter.match({
  "location": "EmiCalculatorSteps.navigate_to_website()"
});
formatter.result({
  "duration": 3757765178,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Valid Loan Details",
  "description": "",
  "id": "calculate-payable-emi;valid-loan-details;valid;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@web-http"
    },
    {
      "line": 7,
      "name": "@system"
    },
    {
      "line": 1,
      "name": "@idbi"
    },
    {
      "line": 7,
      "name": "@regression"
    },
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@selenium"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User provides loan amount as \"40000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Loan rate and term as rate and term respectively",
  "rows": [
    {
      "cells": [
        "name:lnRate",
        "9"
      ],
      "line": 11
    },
    {
      "cells": [
        "name:lnTerm",
        "24"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System shows expected emi as \"1827.39\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 30
    }
  ],
  "location": "EmiCalculatorSteps.enter_loan_amount(String)"
});
formatter.result({
  "duration": 246568576,
  "status": "passed"
});
formatter.match({
  "location": "EmiCalculatorSteps.provide_valid_loan_details(String,String\u003e)"
});
formatter.result({
  "duration": 273750550,
  "status": "passed"
});
formatter.match({
  "location": "EmiCalculatorSteps.calculate_emi()"
});
formatter.result({
  "duration": 3134747955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1827.39",
      "offset": 30
    }
  ],
  "location": "EmiCalculatorSteps.verify_emi(String)"
});
formatter.result({
  "duration": 3158575052,
  "status": "passed"
});
formatter.after({
  "duration": 500373334,
  "status": "passed"
});
formatter.before({
  "duration": 4865475276,
  "status": "passed"
});
formatter.before({
  "duration": 58587,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to website",
  "keyword": "Given "
});
formatter.match({
  "location": "EmiCalculatorSteps.navigate_to_website()"
});
formatter.result({
  "duration": 5058479602,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Valid Loan Details",
  "description": "",
  "id": "calculate-payable-emi;valid-loan-details;valid;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@web-http"
    },
    {
      "line": 7,
      "name": "@system"
    },
    {
      "line": 1,
      "name": "@idbi"
    },
    {
      "line": 7,
      "name": "@regression"
    },
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@selenium"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User provides loan amount as \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Loan rate and term as rate and term respectively",
  "rows": [
    {
      "cells": [
        "name:lnRate",
        "9"
      ],
      "line": 11
    },
    {
      "cells": [
        "name:lnTerm",
        "24"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System shows expected emi as \"NaN\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "EmiCalculatorSteps.enter_loan_amount(String)"
});
formatter.result({
  "duration": 139396883,
  "status": "passed"
});
formatter.match({
  "location": "EmiCalculatorSteps.provide_valid_loan_details(String,String\u003e)"
});
formatter.result({
  "duration": 238457006,
  "status": "passed"
});
formatter.match({
  "location": "EmiCalculatorSteps.calculate_emi()"
});
formatter.result({
  "duration": 3122149532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NaN",
      "offset": 30
    }
  ],
  "location": "EmiCalculatorSteps.verify_emi(String)"
});
formatter.result({
  "duration": 3160237309,
  "status": "passed"
});
formatter.after({
  "duration": 515529930,
  "status": "passed"
});
formatter.uri("GetBookByISBN.feature");
formatter.feature({
  "line": 2,
  "name": "Get book by ISBN",
  "description": "",
  "id": "get-book-by-isbn",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bookstore"
    }
  ]
});
formatter.before({
  "duration": 155235,
  "status": "passed"
});
formatter.before({
  "duration": 37205,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User calls web service to get a book by its ISBN",
  "description": "",
  "id": "get-book-by-isbn;user-calls-web-service-to-get-a-book-by-its-isbn",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@api-rest"
    },
    {
      "line": 4,
      "name": "@rest-assured"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "a book exists with an isbn of 9781451648546",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "a user retrieves the book by isbn",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "totalItems",
        "1"
      ],
      "line": 11
    },
    {
      "cells": [
        "kind",
        "books#volumes"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "response includes the following in any order",
  "rows": [
    {
      "cells": [
        "items.volumeInfo.title",
        "Steve Jobs"
      ],
      "line": 15
    },
    {
      "cells": [
        "items.volumeInfo.publisher",
        "Simon and Schuster"
      ],
      "line": 16
    },
    {
      "cells": [
        "items.volumeInfo.pageCount",
        "630"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "9781451648546",
      "offset": 30
    }
  ],
  "location": "GetBookSteps.a_book_exists_with_isbn(String)"
});
formatter.result({
  "duration": 1370145160,
  "status": "passed"
});
formatter.match({
  "location": "GetBookSteps.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 2455636533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "GetBookSteps.verify_status_code(int)"
});
formatter.result({
  "duration": 140900056,
  "status": "passed"
});
formatter.match({
  "location": "GetBookSteps.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 687466751,
  "status": "passed"
});
formatter.match({
  "location": "GetBookSteps.response_contains_in_any_order(String,String\u003e)"
});
formatter.result({
  "duration": 30765639,
  "status": "passed"
});
formatter.after({
  "duration": 14968,
  "status": "passed"
});
});