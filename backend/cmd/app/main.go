package main

import (
	"github.com/Saffica/wish-to-learn/backend/internal"
	"github.com/gin-gonic/gin"
)

func main() {
	engine := gin.Default()
	h := internal.NewApiHandler(engine)

	h.HandleRoutes()

	h.Run(8888)
}
