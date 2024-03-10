import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {coursesData} from '../../data/courses-data';
import './style.css'; // Import the custom Udemy-themed CSS

class Recommend extends Component {
  constructor() {
    super();
    // this.state = {
    //   questions: [
    //     { id: 1, text: 'Do you enjoy public speaking?', domain: 'Public Speaking' },
    //     { id: 2, text: 'Have you given speeches in public before?', domain: 'Public Speaking' },
    //     { id: 3, text: 'Are you comfortable speaking in front of large audiences?', domain: 'Public Speaking' },
    //     { id: 4, text: 'Do you exercise regularly?', domain: 'Physical Health' },
    //     { id: 5, text: 'Do you follow a balanced diet?', domain: 'Physical Health' },
    //     { id: 6, text: 'Have you participated in any sports or fitness activities?', domain: 'Physical Health' },
    //     { id: 7, text: 'Do you enjoy reading books?', domain: 'Literature' },
    //     { id: 8, text: 'Have you written any poetry or stories?', domain: 'Literature' },
    //     { id: 9, text: 'Do you analyze literature in your free time?', domain: 'Literature' },
    //     { id: 10, text: 'Do you like giving presentations?', domain: 'Communication Skills' },
    //     { id: 11, text: 'Have you worked on improving your public speaking skills?', domain: 'Communication Skills' },
    //     { id: 12, text: 'Do you enjoy debates or discussions?', domain: 'Communication Skills' },
    //     { id: 13, text: 'Do you enjoy writing content?', domain: 'Content Writing' },
    //     { id: 14, text: 'Have you published any articles or blogs?', domain: 'Content Writing' },
    //     { id: 15, text: 'Do you know about SEO and keyword optimization?', domain: 'Content Writing' },
    //     { id: 16, text: 'Do you have any artistic hobbies?', domain: 'Hobbies' },
    //     { id: 17, text: 'Have you created any digital art or illustrations?', domain: 'Hobbies' },
    //     { id: 18, text: 'Have you ever sculpted with clay or other materials?', domain: 'Hobbies' },
    //   ],
    this.state = {
      questions: [
        { id: 1, text: 'Do you enjoy programming and coding?', domain: 'Programming' },
        { id: 2, text: 'Are you interested in algorithms and data analysis?', domain: 'Data Science' },
        { id: 3, text: 'Do you have a passion for creating web applications?', domain: 'Web Development' },
        { id: 4, text: 'Are you intrigued by the world of finance and modeling?', domain: 'Financial Modeling' },
        { id: 5, text: 'Do you have an interest in artificial intelligence and machine learning?', domain: 'Artificial Intelligence' },
        { id: 6, text: 'Are you concerned about digital security and cyber threats?', domain: 'Cybersecurity' },
        { id: 7, text: 'Would you like to develop mobile apps for iOS and Android?', domain: 'Mobile App Development' },
        { id: 8, text: 'Are you curious about the technology behind blockchain and cryptocurrencies?', domain: 'Blockchain Technology' },
        { id: 9, text: 'Do you want to promote products and services through online marketing?', domain: 'Digital Marketing' },
        { id: 10, text: 'Are you interested in creating user-friendly designs and interfaces?', domain: 'UI/UX Design' },
        { id: 11, text: 'Are you skilled in managing projects and leading teams?', domain: 'Project Management' },
        { id: 12, text: 'Do you enjoy working with large datasets and extracting insights?', domain: 'Big Data Analytics' },
        { id: 13, text: 'Are you fascinated by the concept of cloud computing?', domain: 'Cloud Computing' },
        { id: 14, text: 'Would you like to develop interactive games using Unity?', domain: 'Game Development' },
        { id: 15, text: 'Are you interested in the principles and applications of neural networks?', domain: 'Neural Networks' },
        { id: 16, text: 'Do you have a passion for innovation and entrepreneurship?', domain: 'Entrepreneurship' },
        { id: 17, text: 'Are you interested in capturing and editing digital photos?', domain: 'Digital Photography' },
        { id: 18, text: 'Do you want to work with natural language processing and text analysis?', domain: 'Natural Language Processing' },
        { id: 19, text: 'Are you interested in the quantitative aspects of finance?', domain: 'Quantitative Finance' },
      ],
      answers: {},
      submitted: false,
      recommendedSkill: null,
    };
    
    //   answers: {},~
    //   submitted: false,
    //   recommendedSkill: null,
    // };
  }

  handleAnswerChange = (questionId, answer) => {
    this.setState(prevState => ({
      answers: {
        ...prevState.answers,
        [questionId]: answer,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const recommendedSkill = this.recommendSkill();
    this.setState({ submitted: true, recommendedSkill });
  };

  recommendSkill = () => {
    const domainScores = {};

    // Initialize domain scores
    for (const question of this.state.questions) {
      const domain = question.domain;
      domainScores[domain] = 0;
    }

    for (const question of this.state.questions) {
      const domain = question.domain;
      const answer = this.state.answers[question.id];

      if (answer === 'Yes') {
        domainScores[domain]++;
      }
    }

    let recommendedSkill = null;
    let maxScore = 0;

    // Find the domain with the highest score
    for (const domain in domainScores) {
      if (domainScores[domain] > maxScore) {
        maxScore = domainScores[domain];
        recommendedSkill = domain;
      }
    }

    return recommendedSkill;
  };

  render() {
    const { submitted, recommendedSkill } = this.state;

    return (
      <div className="weird-unique-1"> {/* Apply the unique class name for the background color */}
        <div className="container weird-unique-2"> {/* Apply unique class names for the container */}
          <h1 className="weird-unique-3">Find Your Skill</h1> {/* Apply unique class name for the heading */}
          <form onSubmit={this.handleSubmit}>
            {this.state.questions.map(question => (
              <div key={question.id} className="form-container">
                <p className="weird-unique-4">{question.text}</p> {/* Apply unique class name for question text */}
                <label>
                  <input
                    type="radio"
                    name={`answer-${question.id}`}
                    value="Yes"
                    onChange={() => this.handleAnswerChange(question.id, 'Yes')}
                    className='myinput'
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name={`answer-${question.id}`}
                    value="No"
                    onChange={() => this.handleAnswerChange(question.id, 'No')}
                  />
                  No
                </label>
              </div>
            ))}
            <button type="submit" className="weird-unique-6">Submit</button> {/* Apply unique class name for the submit button */}
          </form>
          <div>{submitted && (
            <p className="weird-unique-7">Recommended Courses: {recommendedSkill}</p> /* Apply unique class name for the result message */
          )}</div>
          <footer className="courseFilter">
          {coursesData.filter((course) => course.filterType === recommendedSkill).length > 0 ? (
  coursesData.map((course) =>
    course.filterType === recommendedSkill ? (
      <div className="card" key={course.title}>
        <img src={course.image} className="card-img-top" alt={course.title} />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <Link to="/coursePage" className="btn btn-outline-dark btn-lg">
            Learn More
          </Link>
        </div>
      </div>
    ) : null
  )
) : (
  submitted &&
  <h1>Try finding courses of your interest!</h1>
)}

          </footer>
        </div>
      </div>
    );
  }
}

export default Recommend;