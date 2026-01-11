import React from 'react';

const Help = () => {
  const faqs = [
    {
      question: 'How to add a new student?',
      answer: 'Go to PIMS > Student Admission and fill out the form.'
    },
    {
      question: 'How to check attendance?',
      answer: 'Navigate to Attendance module to view punch in/out times and history.'
    },
    {
      question: 'How to manage library books?',
      answer: 'Use the Library module to add or view available books and materials.'
    },
    {
      question: 'How to issue certificates?',
      answer: 'Go to Certificate module and fill the form to issue new certificates.'
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-info text-white text-center">
              <h3>❓ Help & Support</h3>
            </div>
            <div className="card-body">
              <h4>Frequently Asked Questions</h4>
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="mt-5">Contact Support</h4>
              <p>If you need further assistance, please contact our support team:</p>
              <ul>
                <li>Email: support@hrms.edu</li>
                <li>Phone: +1-234-567-890</li>
                <li>Address: 123 College Street, City, State</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
