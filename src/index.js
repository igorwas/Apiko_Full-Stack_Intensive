const mongoose = require('mongoose');
const { Question } = require('./db/question')
const { Answer } = require('./db/answer')
const { Vote } = require('./db/vote')
const { User } = require('./db/user')

mongoose.connect('mongodb://localhost:3000/apiko-ask')
    .then(() => console.log("DB connected"))
    .catch(error => console.log(error));

const add = async (collection,object) => {
    try {
        const addedObject = await collection.create(object);
        console.log(`object \n${addedObject} \nwas added!`);
        return addedObject;
    } catch (error) {
        console.log(error);
    }
    return
};

const addOneRowToAllCollection = async() => { //question,answer and vote made by the same user
    const user1 = {
        email:"igor.was@meta.ua",
        profile:{
            fullName: "Ihor Vasylechko",
            post: "post"
        },
        services:{
            service1: "service1",
            service2: "service2"
        }
    }

    const addedUser =  await add(User, user1);
    console.log(addedUser._id)
    const question1 = {
        title: "Test question",
        description: "dadaaaaaaaaaaaaaaaaaasaaaaaaaaaaaa",
        tags: [ "tag1", 'tag2'],
        createdById: addedUser._id
    }

    const addedQuestion = await add(Question, question1);

    const answer1 = {
        title: "Test answer",
        description: "dadaaaaaaaaaaaaaaaaaasaaaaaaaaaaaa",
        questionId: addedQuestion._id,
        createdById: addedUser._id
    };

    const addedAnswer = await add(Answer, answer1);

    const vote1 = {
        isPositive:true,
        answerId: addedAnswer._id,
        createdById: addedUser._id
    }

    add(Vote, vote1);
}

addOneRowToAllCollection();