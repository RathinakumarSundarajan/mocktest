const express = require('express');
const Questionbank = require('../../models/qnsModels/qnsModel');



const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};




exports.getQuestions = async (req, res) => {
  try {
    console.log('Fetching questions...');
    const allQuestions = await Questionbank.find({}).lean().exec();
    console.log('Fetched questions:', JSON.stringify(allQuestions, null, 2));
    
    if (!allQuestions || allQuestions.length === 0) {
      console.error('No questions found in the database');
      return res.status(404).json({ message: 'No questions found' });
    }
    
    // Shuffle the questions array
    const shuffledQuestions = shuffleArray(allQuestions);
    // Get the first 10 questions
    const selectedQuestions = shuffledQuestions.slice(0, 100);
    console.log('Selected questions to send:', JSON.stringify(selectedQuestions, null, 2));
    
    res.status(200).json(selectedQuestions);
  } catch (err) {
    console.error('Error fetching questions:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};























// exports.getQuestions = async (req, res) => {
//   try {
//     console.log('Fetching questions...');
//     const allQuestions = await Questionbank.find({}).lean().exec();
//     console.log('Fetched questions:', JSON.stringify(allQuestions, null, 2));
//     console.log('Number of questions:', allQuestions.length);
    
//     if (!allQuestions || allQuestions.length === 0) {
//       console.log('No questions found in the database');
//       return res.status(404).json({ message: 'No questions found' });
//     }
    
//     // Shuffle the questions array
//     const shuffledQuestions = shuffleArray(allQuestions);
//     // Get the first five questions
//     const selectedQuestions = shuffledQuestions.slice(0, 10);
    
//     res.json(selectedQuestions);
//   } catch (err) {
//     console.error('Error fetching questions:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };