import React from 'react'

const Education = () => {
  return (
    <div className="education">
            <h1>EDUCATION</h1>
            <table border={1}>
                <tr>
                  <th>Year</th>
                  <th>Course</th>
                  <th>Institution</th>
                  <th>Score</th>
                </tr>
                <tr>
                  <td>2019-2023</td>
                  <td>B.E (ECE) </td>
                  <td>Canara Engineering College, VTU, Manglore</td>
                  <td>7.12 CGPA</td>
                </tr>
                <tr>
                <td>2017-2019</td>
                  <td>PUC </td>
                  <td>Ambika Padavi Poorva Vidyalaya, Puttur</td>
                  <td>88%</td>
                </tr>
                <tr>
                <td>2017</td>
                  <td>SSLC </td>
                  <td>Swami Sadananada Saraswati School, Manglore</td>
                  <td>76%</td>
                </tr>
            </table><br />
        </div>
  )
}

export default Education