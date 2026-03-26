CREATE DATABASE aondeassistir;

CREATE TABLE teams (
id SERIAL PRIMARY KEY,
name TEXT,
logo TEXT
);

CREATE TABLE matches (
id SERIAL PRIMARY KEY,
home_team INTEGER,
away_team INTEGER,
date TIMESTAMP,
stadium TEXT
);

CREATE TABLE odds (
id SERIAL PRIMARY KEY,
match_id INTEGER,
home_win FLOAT,
draw FLOAT,
away_win FLOAT,
source TEXT
);
