package internal

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type ApiHandler struct {
	engine   *gin.Engine
	apiGroup *gin.RouterGroup
}

func NewApiHandler(engine *gin.Engine) *ApiHandler {
	return &ApiHandler{
		engine:   engine,
		apiGroup: engine.Group("/api/v1"),
	}
}

func (h *ApiHandler) Run(port int) error {
	serv := &http.Server{
		Addr:    fmt.Sprintf(":%d", port),
		Handler: h.engine,
	}
	return serv.ListenAndServe()
}

func (h *ApiHandler) HandleRoutes() {
	h.apiGroup.GET("/test", h.test)

	// auth := h.apiGroup.Group("/auth")
	// {
	// 	auth.POST("/login", h.login)
	// 	auth.POST("/refresh", h.refresh)
	// }
}

func (h *ApiHandler) test(c *gin.Context) {
	fmt.Println("test", time.Now())
	c.JSON(http.StatusOK, map[string]bool{"test": true})
}
