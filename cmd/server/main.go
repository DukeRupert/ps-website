package main

import (
	"log"
	"net/http"
	"os"

	"github.com/dukerupert/ps-website/internal/handlers"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	mux := http.NewServeMux()

	// Static files
	fs := http.FileServer(http.Dir("static"))
	mux.Handle("GET /static/", http.StripPrefix("/static/", fs))

	// Pages
	pages := handlers.NewPages()
	mux.HandleFunc("GET /{$}", pages.Home)

	log.Printf("Starting server on :%s", port)
	if err := http.ListenAndServe(":"+port, mux); err != nil {
		log.Fatal(err)
	}
}
