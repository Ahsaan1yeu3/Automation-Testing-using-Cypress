export class LoginPage{

    usernametextbox='#uname'
    passwordtextbox='#pwd'
    loginbutton='[type="submit"]'

 
    enterusername(username){

        cy.get(this.usernametextbox).type(username)


    }

    enterpassword(password){
        cy.get(this.passwordtextbox).type(password)

    }

    clicklogin(){

        cy.get(this.loginbutton).click()
    }






}