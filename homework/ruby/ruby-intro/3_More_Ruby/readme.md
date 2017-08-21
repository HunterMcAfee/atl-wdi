[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# HW Reading: Practical Object-Oriented Design in Ruby

[POODR](http://www.poodr.com/) (pronounced "pooder") explains object-oriented design (OOD) in Ruby. Javascript is an object-oriented language but it is not class-based like it is in Ruby, Java, C++, C, etc.. POODR was written by Sandi Metz, a software developer and author focused on writing flexible object-oriented code in Ruby and Rails.

## Exercise Objectives

- have fun reading material on programmatic thinking and design
- gain insight to programming languages from a design standpoint
- gain an intermediate level of understanding Ruby as a class-based language
- start thinking about the differences in Javascript and Ruby

## Directions

Read the first 3 chapters of POODR [available as a PDF here](https://github.com/edenzik/cs105b/blob/master/books/Practical%20Object-Oriented%20Design%20in%20Ruby.pdf) and answer the questions below.


### Short Answer Questions:

Answer should be no more than a couple of sentences. Refer to the reading.

1. According to Metz, what is Object-oriented design about?

```
Managing dependencies.
```

2. What does SOLID stand for?

```
Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion
```

3. Ruby is a class-based object-oriented language. What does that mean?

```
Rather than having data types and having the methods built into the syntax, everything in Ruby is object based.  All the methods that are normally associated with data types are actually on that object in Ruby.
```

4. Where are methods defined in Ruby?

```
Methods are defined within the class.
```

5. Why does single Responsibility matter?

```
It affects the ability to reuse classes.  If a class has more than one responsiblity, it is difficult to use the parts that are only necessary towards your one purpose.
```

6. What does `attr_reader` do?

```
attr_reader creates wrapper methods for your variables present within a class that can be used as reference in other methods.
```

7. What are 4 benefits Metz outlines for methods that have a single responsibility?

```
Expose previously hidden qualities.
Avoide the need for comments.
Encourage reuse.
Are easy to move to another class.
```

8. What are 4 things an object knows when it has a dependency?

```
The name of another class.
The name of a message that it intends to send to smoeone other an itself.
The arguments that a message requires.
The order of those arguments.
```

9. Dependency management is core to creating future-proof applications. What does injecting dependencies and isolating dependencies do? What are their benefits?

```
Injecting dependencies is heavily reliant on not creating explicit dependencies by hard-coding a reference to a higher class.  Rather, you pass in the new class as an argument in order to "inject a dependency".  This allows you to retain the functionality of the class without having to rely on that explicit dependency.  In isolating dependencies, you try to seperate those classes that are going to have heavily reliant dependencies.  Through this, the flow of your classes is not effected due to these isolated dependencies.
```
