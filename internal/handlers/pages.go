package handlers

import (
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

type Pages struct {
	templates *template.Template
}

func NewPages() *Pages {
	tmpl := template.Must(template.ParseGlob(filepath.Join("templates", "layouts", "*.html")))
	tmpl = template.Must(tmpl.ParseGlob(filepath.Join("templates", "pages", "*.html")))

	return &Pages{templates: tmpl}
}

func (p *Pages) Home(w http.ResponseWriter, r *http.Request) {
	if err := p.templates.ExecuteTemplate(w, "base", nil); err != nil {
		log.Printf("Error rendering home: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}
}
