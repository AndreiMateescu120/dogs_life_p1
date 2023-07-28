package com.example.superheroes.model;

import jakarta.persistence.*;

@Entity
@Table(name = "heroes")
public class Hero {

    private String name;
    private String alias;
    private String superpower;
    private int teamid;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getSuperpower() {
        return superpower;
    }

    public void setSuperpower(String superpower) {
        this.superpower = superpower;
    }

    public int getTeamid() {
        return teamid;
    }

    public void setTeamid(int teamid) {
        this.teamid = teamid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Hero{" +
                "name='" + name + '\'' +
                ", alias='" + alias + '\'' +
                ", superpower='" + superpower + '\'' +
                ", teamid=" + teamid +
                ", id=" + id +
                '}';
    }


}
