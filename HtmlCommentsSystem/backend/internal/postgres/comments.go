package postgres

import (
	"fmt"
	"github.com/doug-martin/goqu/v9"
)

const (
	commentsTable = "users"
)

type Comment struct {
	Id      uint64  `json:"id" goqu:"skipinsert"`
	UserId  *uint64 `json:"user_id"`
	Message *string `json:"name"`
}

func (db *DataBase) AddComment(item Comment) error {
	insertQuery, _, err := goqu.Insert(commentsTable).Rows(item).ToSQL()
	if err != nil {
		return fmt.Errorf("configure query: %w", err)
	}
	if _, err = db.DB.Exec(insertQuery); err != nil {
		return fmt.Errorf("insert data: %w", err)
	}
	return nil
}

func (db *DataBase) GetComments() ([]Comment, error) {
	selectQuery, _, err := goqu.From(commentsTable).ToSQL()
	if err != nil {
		return nil, fmt.Errorf("configure query: %w", err)
	}

	var comments []Comment
	if err = db.DB.Select(&comments, selectQuery); err != nil {
		return nil, fmt.Errorf("select data: %w", err)
	}
	return comments, nil
}
