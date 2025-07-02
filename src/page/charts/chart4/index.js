import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CiPlay1 } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { CiShare2 } from "react-icons/ci";
import { IoBuild } from "react-icons/io5";
const App = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('No file selected (Max. limit 1 MB)');

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('No file selected (Max. limit 1 MB)');
    }
  };

  return (
    <div className='bg-sky-50 p-10'>
      {/* Main Content */}
      <Container fluid >

        <h2>Use assistant</h2>
        <p>Test the assistant, share its end user UI through URL or bring into your own front-end by API</p>
        <div className='d-flex gap-2'>
        <Button variant="outline-primary d-flex align-items-center gap-2">Share UI<CiShare2 /></Button>
        <Button variant="outline-primary d-flex align-items-center gap-2">Use API <IoBuild /></Button>
          
        </div>
        <Row className="mt-3 bg-white rounded-2xl">
          <Col sm={12} md={6}>
            <h2>Talk to PDF</h2>
            <p>Upload PDF files and talk to them like they were a person</p>
            <div>
              <label  htmlFor=""className='fw-bold '>Upload PDF file</label>
              <input
                type="file"
                accept=".pdf"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
                <p className='border'>{fileName}</p>
              <Button className='w-100' variant="light" onClick={handleBrowseClick}>Browse and upload</Button>
            
            </div>
            <div>
              <textarea name="" placeholder="Enter input here ..." id="" className='w-100 border-gray-100'></textarea>
              <p>AI can make mistakes, please double check.</p>
            </div>
            <Button variant="dark" className='d-flex align-items-center w-100 ' ><CiPlay1 /><span>Run assistant</span></Button>
          </Col>
          <Col sm={12} md={6}>
            <div>
              <h4>Input</h4>
              <p>tell me how to build a great digital marketing campaign</p>
            </div>
            <div>
              <h4>Output</h4>
              <p>
                Building a great digital marketing campaign involves a combination of strategic planning, understanding your audience, and leveraging various digital channels effectively. Here’s a step-by-step guide to help you create a successful digital marketing campaign:
                1. Define Your Goals
                Specific: Clearly define what you want to achieve (e.g., increase website traffic by 20%).
                Measurable: Ensure you can track your progress (e.g., using Google Analytics).
                Achievable: Set realistic goals based on your resources and market conditions.
                Relevant: Align your goals with your overall business objectives.
                Time-bound: Set a deadline for achieving your goals.
                2. Understand Your Audience
                Demographics: Age, gender, location, income, education.
                Psychographics: Interests, values, lifestyle, behavior.
                Customer Personas: Create detailed profiles of your ideal customers to tailor your messaging.
                3. Conduct Market Research
                Competitor Analysis: Identify your competitors, analyze their strategies, and find gaps you can exploit.
                SWOT Analysis: Assess your strengths, weaknesses, opportunities, and threats.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
