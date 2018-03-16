# Compatability Predictor

### **Running the application**

1.  First clone this repository and change directories into compatibility-predictor 
```bash
git clone git@github.com:aukai84/compatibility-predictor.git
cd compatibility-predictor
```

2.  Next change directores into app and install dependencies
```bash
cd app
npm install                                                                                                                                                                                                            
```

3.  To run the application, start the node server in the **app** by typing 
```bash
npm start
```
**You should now be able to access the application from your browser at **localhost:3000****


### **Calculating Compatibility**

1.  The application takes input from web based, client-side input forms

![Image](/assets/input.png)

2.  The client-side application allows you to built a list of your current team members, as well as a list of new applicants, with attributes scores for proficiency in certain languages
```json
{
  "team": [
    {
      "name": "Will",
      "attributes": {
        "javascript": "person",
        "python": 6,
        "java": 3,
        "ruby": 5
      }
    },
    {
      "name": "Michael",
      "attributes": {
        "javascript": 4,
        "python": 6,
        "java": 8,
        "ruby": 1
      }
    },
    {
      "name": "Daniel",
      "attributes": {
        "javascript": 8,
        "python": 8,
        "java": 4,
        "ruby": 5
      }
    }
  ],
  "applicants": [
    {
      "name": "Aukai",
      "attributes": {
        "javascript": 8,
        "python": 6,
        "java": 4,
        "ruby": 1
      }
    },
    {
      "name": "Keegan",
      "attributes": {
        "javascript": 8,
        "python": 8,
        "java": 7,
        "ruby": 5
      }
    },
    {
      "name": "Vic",
      "attributes": {
        "javascript": 1,
        "python": 2,
        "java": 3,
        "ruby": 10
      }
    }
  ]
}
```

3.  To calculate each applicants score, the application compares each applicants attributes vs. the total average of each team members attributes

e.g.
```javascript
teamAverage = {
    "javascript": 7.55,
    "python": 4.25
    "java": 8.78,
    "ruby": 1.02
}
```

4.  The applications predictor function returns an array of scored applicants ***between 0 and 1, higher being more compatible***
```javascript
[
    {
        "name": Aukai,
        "score": .67
    },
    {
        "name": Michael,
        "score": .89
    }
]
```

5.  Then displays the result to the user in the browser

![Image](/assets/score.png)
