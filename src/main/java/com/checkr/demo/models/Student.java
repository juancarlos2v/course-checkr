package com.checkr.demo.models;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable=false)
    private Long id;
    private String name;
    private String lastName;
    private Integer year;

    @OneToMany(mappedBy="student")
    private Set<Subject>  subjects;

    public Student() {
    }

    public Student(Long id, String name, String lastName, Integer year, Set<Subject> subjects) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.year = year;
        this.subjects=subjects;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Set<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }
}
