[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

var project = {
  projectName: "Room",
  instructions: "Keep room in orderly maintenance by performing schedule cleaning tasks",
  taskList: [],
}
var taskCleanRoom = {
  taskName = "Clean floor",
  estimatedCompletionTimeMins: 30,
  actualCompletionTimeMins: 25,
  timeDeadline: 1600,
  dateDeadline: "07/07/17",
}

You will need project object that will keep hierarcial organization of your projects.  This will allow you to keep your tasks contained to their area of designation.  For example, if you want to keep your home cleaning tasks seperate from your exercising ones, you will have the capacity to do so.  

For the task object, it may prove useful to keep track of when your task needs to be completed, how long it will take, how long it will actually take. etc. This will give you more detailed information of each task in your projects (and how to perform them).

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

var album = {
  albumTitle: "France",
  albumDescription: "Summer vacation to France 2017",
  albumDate: "07/23/17",
}

var photo {
  photoName: "Arc de Triumph",
  photoDescription: "Our family in front of the Arc de Triumph",
  photoLocation: "Paris, France",
  photoURL: "images/aasdfjk.jpg",
}

The user may want to submit an album title, along with a description, after they gathered all of the phootes.  The album date could also be generated once the album has been submitted through the app.  For each individual photo, the user can add details such as photo name, description, and location based upon their desire to give them attributes.  It would also be useful to store photo storage information, such as the URL.

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

var monitor {
  currentTemp: 79,
  currentTime: "4:18",
  numberOfPeople: 3;
}

var devices {
  kitchenLight: true,
  livingroomLight: false,
  bedroomLight: true,
  mediaCenter: true,
  thermostatSet: 78,
}

The home automation app will need to monitor the status of the home, mainly via temperature readings, scheduled timing, and the current number of occupants.  Identifying the number of occupants may allow the app to tailor settings depending on that value, such as letting the temperature rise while there is no one occupying the home.  The app will also need to control all of the devices that it can manage, such as lights that are available in different rooms, as well as the thermostat.

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

var sneaker1 = {
  brand: Nike,
  style: running,
  sizesAvailable: [8, 9, 10, 10.5, 12],
  picture: images/lasdfkj.jpg,
}

var cart = {
  itemsInCart = [sneaker1, sneaker2, socks1],
  priceSubtotal = 50,
  estimatedTax = 3.5,
  estimatedTotal = 53.5,
  estimatedDelivery = "Tuesday",
}

For each sneaker, it will prove useful for the user to know specific details such as the brand name, sizes, style of the shoe, and an image of what it looks like.  The cart object will contain current list of the products the user wishes to purchase, as well as estimated values of the cart's total with estimated taxes.

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

The core function of the app was to provide the user with how many stops were to be expected when traveling between stations, but this representation does not provide the means of doing so.  Unless you have a map, you would not really know the location of the stations in relation to one another.  An array would probably serve as a better means of containing each of the rail lines.  One of the advantages to this representation though, would be using the rail lines as a reference.  If given more useful properties, referencing each rail line by its name would prove useful in gathering information for the user.  Also, despite it not being the exact intent of the app, the description may provide the user with some useful geographic information if they desire it.

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

The first representation associates the patient and the appointment with the doctor by indexing the appointment information.  This would allow you to easily find all the appointments that are associated with that doctor.  On the patient side, however, if there are appointments associated with different doctors you will have to go through each doctor individually in order to find the appointment.  The second representation does a much better job of this, as it lists out both the doctor and patient associated with an appointment.  However, if a doctor is trying to find a list of their appointments and their patients, it may prove more difficult. They would be only be able to go through a list of all appointments rather than seeing just their own.  Based upon these differences and taking the user into consideration, a doctor would probably have a better experience with the first representation, while the patient (and possibly the secretary) would be better off with the second.

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.
    player
      - username
      - winningPhrase
    gameLogic
      - player using x
      - player using o

b.  How might those entities be represented in JavaScript code?
    var player = {
      userName: "CheetoCheetah",
      winningPhrase: "Ain't easy being cheesy",
    };
    var gameLogic {
      playerX: "CheetoCheetah", (You could generate which user would be which with a random number generator)
      playerO: "KoolAidMan",
    };

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?
    If playing for stats and bragging rights, a user might want to go by a username and have associated tags, such as a profile picture or a winning phrase that's displayed when they have won.  As for the game logic, one of the players will need to be designated with X's, while the other will need to be designated the O's.
