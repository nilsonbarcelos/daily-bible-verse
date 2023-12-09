import Mail from "../lib/Mail"

import { randomVerse } from "../service/randomVerse"


export default {
    key: process.env.QUEUE_EMAIL_SENDER,
    options:{
        delay: 5000,
        priority: 3
    },
    async handle({ data }){
        const { user } = data;
        const result = await randomVerse()

        await Mail.sendMail({
            from: 'Company <company@email.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Daily Bible Verse',
            html: `Hello ${user.name} <br/>
               <br/> Here is your daily Bible verse: <br/>
                Your verse is from ${result.verses[0].book_name} - ${result.verses[0].chapter}:${result.verses[0].verse}
                <br/><br/>
                ${result.text}
            `
        })
    }
}

