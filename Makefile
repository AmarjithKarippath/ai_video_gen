.PHONY: users help

help:
	@echo "Available commands:"
	@echo "  make users   List all users registered via the signup form"

users:
	@python3 scripts/list_users.py
