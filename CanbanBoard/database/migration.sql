CREATE TABLE IF NOT EXISTS users
(
    "name"     TEXT  PRIMARY KEY,
    "password" TEXT  NOT NULL
);

CREATE TABLE IF NOT EXISTS categories
(
    "name" TEXT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS tasks
(
    "id"          SERIAL PRIMARY KEY,
    "user"        TEXT   NOT NULL,
    "description" TEXT   NOT NULL,
    "category"    TEXT   NOT NULL,

    FOREIGN KEY ("user")     REFERENCES users ("name"),
    FOREIGN KEY ("category") REFERENCES categories ("name"),

    UNIQUE ("user", "description")
);

INSERT INTO users VALUES ('Anton', '123456');
INSERT INTO users VALUES ('Ivan', 'qwerty');
INSERT INTO users VALUES ('Maxim', 'qwerty123');

INSERT INTO categories VALUES ('todo');
INSERT INTO categories VALUES ('in progress');
INSERT INTO categories VALUES ('done');

INSERT INTO tasks VALUES (DEFAULT, 'Anton', 'Walk with the dog', 'todo');
INSERT INTO tasks VALUES (DEFAULT, 'Anton', 'Washes the dishes', 'in progress');
INSERT INTO tasks VALUES (DEFAULT, 'Anton', 'Cook a dinner', 'done');

INSERT INTO tasks VALUES (DEFAULT, 'Ivan', 'Create web interface', 'todo');
INSERT INTO tasks VALUES (DEFAULT, 'Ivan', 'Create API', 'in progress');
INSERT INTO tasks VALUES (DEFAULT, 'Ivan', 'Create DB scheme', 'done');

INSERT INTO tasks VALUES (DEFAULT, 'Maxim', 'Research Galois theory', 'todo');
INSERT INTO tasks VALUES (DEFAULT, 'Maxim', 'Research functional analysis', 'in progress');
INSERT INTO tasks VALUES (DEFAULT, 'Maxim', 'Research complex analysis', 'done');
