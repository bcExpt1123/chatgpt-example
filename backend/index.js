const { Configuration, OpenAIApi} = require("openai");
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();
const configuration = new Configuration({
    apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(configuration);
const app=express();
app.use(bodyParser.json(),
        cors());
const port=3080;

app.post('/chat', async (req,res)=>{
    const {message} = req.body;
    try {
        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt: `${message}`,
            temperature: 0.7,
            max_tokens: 2048
        });
         res.json({
            message:response.data.choices[0].text
         })
    } catch (err) {
        res.status(err?.response?.status ?? 400).json(err?.response?.data ?? {error: {message: "Failed to fetch message."}})
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);    
});
