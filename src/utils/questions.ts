import email from '../assets/email.svg'
import foodArrangement from '../assets/foodArrangement.svg'
import drink from '../assets/drink.svg'
import ballon from '../assets/ballon.svg'
import game from '../assets/game.svg'

export const questions = [
    { id: 'q1', text: 'Do you want to send E-Invite?', options: ['Yes', 'No'], svg: email  },
    { id: 'q2', text: 'What will be food arrangements?', options: ['Order-in', 'Home cooked food', 'Book a catere', 'potluck'], svg: foodArrangement },
    { id: 'q3', text: 'will there be alhocole?', options: ['Yes, I need to order it', 'Yes, I have it', 'No'], svg: drink },
    { id: 'q4', text: 'Do you wish to hire a decorator?', options: ['Yes', 'No', 'I will decorate myself'], svg: ballon },
    { id: 'q5', text: 'Do you paln to rent board games?', options: ['Yes', 'No', 'I have board games at home'], svg:game },
];