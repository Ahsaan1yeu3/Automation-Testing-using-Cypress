///<reference types="cypress"/>

import {LoginPage} from "./pages/loginpage"

const loginpage= new LoginPage()


describe("All Login Test",()=>{

     beforeEach(function(){
        cy.visit("https://trytestingthis.netlify.app/")
     })

     it("login test 1",()=>{
        loginpage.enterusername('test')
        loginpage.enterpassword('test')
        loginpage.clicklogin()
    })
    it("Login test 2",()=>{
        loginpage.enterusername('test123')
        loginpage.enterpassword('test123')
        loginpage.clicklogin()
    })
    it("Login Test 3",()=>{
        loginpage.enterusername('test')
        loginpage.enterpassword('test124')
        loginpage.clicklogin()
    })
    
})


