package main

import (
	"github.com/sirupsen/logrus"
	"html_comments_system/internal/config"
	"html_comments_system/internal/postgres"
)

func main() {
	cfg, err := config.New("config.json")
	if err != nil {
		logrus.Fatal(err)
	}

	db, err := postgres.New(cfg.PostgresDSN)
	if err != nil {
		logrus.Fatal(err)
	}

	var str = "LOH"
	db.AddUser(postgres.User{Name: &str})

	defer func() {
		if err = db.Close(); err != nil {
			logrus.Error(err)
		}
	}()
}
