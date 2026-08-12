#!/usr/bin/env python3
"""List users registered via the Waveify signup form."""

from __future__ import annotations

import sqlite3
import sys
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent.parent / "backend" / "customers.db"


def main() -> int:
    if not DB_PATH.exists():
        print(f"No customers database found at {DB_PATH}")
        print("Start the backend (or docker compose) and have at least one signup first.")
        return 1

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    rows = conn.execute(
        "SELECT id, name, email, created_at FROM customers ORDER BY created_at DESC"
    ).fetchall()
    conn.close()

    if not rows:
        print("No registered users yet.")
        return 0

    id_w = max(2, max(len(str(r["id"])) for r in rows))
    name_w = max(4, max(len(r["name"] or "") for r in rows))
    email_w = max(5, max(len(r["email"] or "") for r in rows))
    date_w = max(10, max(len(str(r["created_at"] or "")) for r in rows))

    header = f'{"ID":<{id_w}}  {"NAME":<{name_w}}  {"EMAIL":<{email_w}}  {"CREATED AT":<{date_w}}'
    print(header)
    print("-" * len(header))
    for r in rows:
        print(
            f'{str(r["id"]):<{id_w}}  '
            f'{(r["name"] or ""):<{name_w}}  '
            f'{(r["email"] or ""):<{email_w}}  '
            f'{str(r["created_at"] or ""):<{date_w}}'
        )
    print("-" * len(header))
    print(f"Total users: {len(rows)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
