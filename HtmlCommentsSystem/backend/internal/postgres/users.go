package postgres

import (
	"fmt"
	"github.com/doug-martin/goqu/v9"
)

const (
	usersTable = "users"
)

type User struct {
	Id   uint64  `json:"id" goqu:"skipinsert"`
	Name *string `json:"name"`
}

func (db *DataBase) AddUser(item User) error {
	insertQuery, _, err := goqu.Insert(usersTable).Rows(item).ToSQL()
	if err != nil {
		return fmt.Errorf("configure query: %w", err)
	}
	if _, err = db.DB.Exec(insertQuery); err != nil {
		return fmt.Errorf("insert data: %w", err)
	}
	return nil
}
