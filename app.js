const STORAGE_KEY = "pyforge-project-progress-v2";

const ICONS = {
  dashboard: '<svg viewBox="0 0 24 24"><path d="M4 13h6V4H4z"></path><path d="M14 20h6v-7h-6z"></path><path d="M14 9h6V4h-6z"></path><path d="M4 20h6v-3H4z"></path></svg>',
  map: '<svg viewBox="0 0 24 24"><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3z"></path><path d="M9 3v15"></path><path d="M15 6v15"></path></svg>',
  sword: '<svg viewBox="0 0 24 24"><path d="M14.5 17.5l-8-8"></path><path d="M15 3l6 6-4 1-7 7-3-3 7-7z"></path><path d="M5 19l4-4"></path><path d="M2 22l3-3"></path></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"></path><path d="M7 15l4-4 3 3 5-7"></path></svg>',
  rotate: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><path d="M21 3v6h-6"></path></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6.34 17.66l-1.41 1.41"></path><path d="M19.07 4.93l-1.41 1.41"></path></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8z"></path></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M5 3l14 9-14 9z"></path></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>',
  bookmark: '<svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z"></path></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7z"></path><path d="M19 16l.8 3.2L23 20l-3.2.8L19 24l-.8-3.2L15 20l3.2-.8z"></path></svg>'
};

const PROJECT = {
  name: "ProjectPulse",
  tagline: "Build a Python CLI issue tracker with persistence, analytics, tests, async enrichment, and packaging.",
  outcome: "By the final step you have a real Python project: a package with a command-line interface, domain models, repositories, imports, reports, tests, and release-ready docs."
};

const TRACKS = [
  {
    id: "blueprint",
    title: "Blueprint",
    icon: "B",
    color: "var(--teal)",
    brief: "Shape the product slice, repository layout, modules, and runnable entry points."
  },
  {
    id: "core",
    title: "Core Engine",
    icon: "C",
    color: "var(--coral)",
    brief: "Model issues, validate inputs, handle exceptions, and write pure business logic."
  },
  {
    id: "data",
    title: "Data Layer",
    icon: "D",
    color: "var(--amber)",
    brief: "Persist records with JSON and SQLite, import CSV, stream rows, and aggregate metrics."
  },
  {
    id: "interfaces",
    title: "Interfaces",
    icon: "I",
    color: "var(--violet)",
    brief: "Expose the project through argparse commands, decorators, logging, and async enrichment."
  },
  {
    id: "quality",
    title: "Quality And Ship",
    icon: "Q",
    color: "var(--green)",
    brief: "Add tests, typing, protocols, docs, packaging, and release checks."
  }
];

const QUESTS = [
  {
    id: "project-charter",
    track: "blueprint",
    title: "Write The Product Charter",
    subtitle: "Decide what ProjectPulse will do before writing code.",
    difficulty: "Stage 1",
    xp: 110,
    minutes: 18,
    tags: ["scope", "requirements", "readme"],
    deliverable: "Create a README section that defines the user, the problem, three core commands, and the first usable demo.",
    buildSteps: [
      "Name the project ProjectPulse and describe it in one paragraph.",
      "Pick the MVP commands: add, list, close, report.",
      "Write one sample terminal session that shows the final tool being used."
    ],
    lesson: [
      "A strong Python project starts with a narrow behavior slice, not a folder full of abstractions.",
      "Your first demo should force decisions about inputs, outputs, errors, and persistence.",
      "Engineering scope is a skill: leave plugin systems, auth, and web UI out until the core loop works."
    ],
    challenge: {
      type: "choice",
      prompt: "Which MVP scope gives the best end-to-end learning path?",
      code: `# ProjectPulse MVP options
# A learner should finish with a working Python tool.`,
      options: [
        "A CLI that can add issues, list issues, close issues, save them, and print a report",
        "A distributed project management SaaS with teams, billing, OAuth, and real-time boards",
        "Only a collection of disconnected syntax exercises",
        "A custom Python interpreter that runs ProjectPulse scripts"
      ],
      answer: 0,
      explanation: "The CLI issue tracker is small enough to finish but broad enough to cover modules, data modeling, files, databases, tests, errors, and packaging."
    }
  },
  {
    id: "package-skeleton",
    track: "blueprint",
    title: "Build The Package Skeleton",
    subtitle: "Make the project importable and runnable as a module.",
    difficulty: "Stage 2",
    xp: 130,
    minutes: 25,
    tags: ["modules", "packages", "entrypoint"],
    deliverable: "Create a package layout with projectpulse/__init__.py, projectpulse/__main__.py, cli.py, models.py, storage.py, analytics.py, and tests/.",
    buildSteps: [
      "Create a src-style or flat package layout and keep imports explicit.",
      "Put main() in cli.py and call it from __main__.py.",
      "Verify python -m projectpulse runs without import errors."
    ],
    lesson: [
      "A module is a Python file; a package is a directory Python can import from.",
      "Putting the CLI entry point in __main__.py lets users run python -m projectpulse.",
      "Small modules with clear ownership make later testing and refactoring cheaper."
    ],
    challenge: {
      type: "fill",
      prompt: "Fill the conventional entry-point guard.",
      code: `from .cli import main

if ____:
    main()`,
      answers: ["__name__ == \"__main__\"", "__name__ == '__main__'"],
      placeholder: "__name__ check",
      explanation: "The guard keeps main() from running on import while still running when the module is executed directly."
    }
  },
  {
    id: "domain-model",
    track: "core",
    title: "Model Issues With Dataclasses",
    subtitle: "Turn vague dictionaries into typed domain objects.",
    difficulty: "Stage 3",
    xp: 150,
    minutes: 30,
    tags: ["dataclasses", "typing", "oop"],
    deliverable: "Implement an Issue dataclass with id, title, priority, status, tags, created_at, and closed_at fields.",
    buildSteps: [
      "Use dataclass for Issue and Enum or Literal values for status and priority.",
      "Use a default factory for mutable fields like tags.",
      "Add methods or properties that answer domain questions such as is_open."
    ],
    lesson: [
      "Dataclasses remove boilerplate while keeping the model explicit.",
      "Mutable defaults must be created per instance, not shared between every issue.",
      "A domain object is allowed to carry behavior when that behavior protects invariants."
    ],
    challenge: {
      type: "fill",
      prompt: "Fill the safe dataclass field for tags.",
      code: `from dataclasses import dataclass, field

@dataclass
class Issue:
    title: str
    tags: list[str] = ____`,
      answers: ["field(default_factory=list)"],
      placeholder: "safe default",
      explanation: "field(default_factory=list) creates a fresh list for each Issue instead of sharing one mutable default."
    }
  },
  {
    id: "validation-errors",
    track: "core",
    title: "Validate Inputs And Raise Useful Errors",
    subtitle: "Keep bad issue data from entering the system.",
    difficulty: "Stage 4",
    xp: 140,
    minutes: 28,
    tags: ["exceptions", "validation", "control-flow"],
    deliverable: "Add validation functions and custom ProjectPulseError subclasses for empty titles, unknown priorities, and missing issue ids.",
    buildSteps: [
      "Create ProjectPulseError as the base exception for expected user-facing failures.",
      "Validate raw CLI strings before constructing Issue objects.",
      "Return clear messages at the CLI boundary without hiding programming errors."
    ],
    lesson: [
      "Exceptions are control flow for exceptional paths; do not use them to replace ordinary if statements.",
      "Custom exception types let the CLI handle expected user mistakes differently from bugs.",
      "Validation belongs near the boundary where untrusted text enters the system."
    ],
    challenge: {
      type: "choice",
      prompt: "Where should an empty issue title be rejected?",
      code: `def add_issue(raw_title: str, priority: str) -> Issue:
    title = raw_title.strip()
    ...`,
      options: [
        "At the input boundary before the Issue is saved",
        "Only after the report command runs",
        "Inside random tests so production accepts it",
        "Never; empty titles make fine issue records"
      ],
      answer: 0,
      explanation: "Reject invalid raw input before it becomes persisted domain state."
    }
  },
  {
    id: "command-functions",
    track: "core",
    title: "Write Command Functions",
    subtitle: "Separate business logic from the terminal interface.",
    difficulty: "Stage 5",
    xp: 140,
    minutes: 30,
    tags: ["functions", "kwargs", "pure-logic"],
    deliverable: "Create service functions like add_issue, close_issue, list_open_issues, and summarize_board that operate on repositories.",
    buildSteps: [
      "Pass dependencies into functions instead of reading globals.",
      "Use keyword-only arguments for flags that change behavior.",
      "Keep terminal printing in cli.py, not inside core logic."
    ],
    lesson: [
      "Functions are easier to test when inputs and outputs are explicit.",
      "Keyword-only parameters make call sites readable for options like include_closed or limit.",
      "Pure-ish command functions let the CLI, tests, and future API reuse the same behavior."
    ],
    challenge: {
      type: "fill",
      prompt: "Fill the keyword-only parameter name.",
      code: `def list_issues(repo, *, ____=False):
    return repo.find_all(include_closed=include_closed)`,
      answers: ["include_closed"],
      placeholder: "parameter",
      explanation: "The bare * forces include_closed to be named at the call site, which makes behavioral flags clearer."
    }
  },
  {
    id: "json-repository",
    track: "data",
    title: "Persist To JSON",
    subtitle: "Save and load issues with pathlib, json, and context managers.",
    difficulty: "Stage 6",
    xp: 160,
    minutes: 35,
    tags: ["files", "json", "context-managers"],
    deliverable: "Implement JsonIssueRepository with load_all, save_all, add, update, and find_by_id.",
    buildSteps: [
      "Convert Issue objects to dictionaries before writing JSON.",
      "Use pathlib.Path and with blocks for file operations.",
      "Handle a missing data file by returning an empty issue list."
    ],
    lesson: [
      "JSON is a simple persistence layer while the domain model is still moving.",
      "Context managers close files even when serialization or parsing fails.",
      "Serialization is a boundary: keep conversion code isolated from business rules."
    ],
    challenge: {
      type: "choice",
      prompt: "Which file write pattern is safest for this repository?",
      code: `def save_all(path, rows):
    ...`,
      options: [
        "with path.open('w', encoding='utf-8') as file: json.dump(rows, file, indent=2)",
        "file = open(path, 'w'); json.dump(rows, file)",
        "json.dump(rows, path)",
        "print(rows)"
      ],
      answer: 0,
      explanation: "The with block closes the file reliably, and encoding plus indentation make the data predictable and inspectable."
    }
  },
  {
    id: "sqlite-repository",
    track: "data",
    title: "Upgrade To SQLite",
    subtitle: "Store issues in a real local database with parameterized queries.",
    difficulty: "Stage 7",
    xp: 190,
    minutes: 45,
    tags: ["sqlite", "sql", "persistence"],
    deliverable: "Build SqliteIssueRepository with schema creation, inserts, updates, queries, and a JSON-to-SQLite migration command.",
    buildSteps: [
      "Create an issues table with typed columns and a primary key.",
      "Use sqlite3 parameter substitution instead of formatting SQL strings.",
      "Wrap writes in a transaction so failures do not leave half-written data."
    ],
    lesson: [
      "SQLite is a normal Python superpower: no server, useful transactions, and standard-library support.",
      "Parameterized queries protect correctness and security by keeping data separate from SQL.",
      "A repository interface lets the rest of the app ignore whether storage is JSON or SQLite."
    ],
    challenge: {
      type: "choice",
      prompt: "Which query style should ProjectPulse use?",
      code: `title = "Fix parser"
priority = "high"`,
      options: [
        "conn.execute('insert into issues (title, priority) values (?, ?)', (title, priority))",
        "conn.execute(f\"insert into issues values ('{title}', '{priority}')\")",
        "conn.execute('insert into issues values (' + title + ')')",
        "conn.execute(title, priority)"
      ],
      answer: 0,
      explanation: "Question-mark placeholders let sqlite3 bind values safely and correctly."
    }
  },
  {
    id: "csv-importer",
    track: "data",
    title: "Import CSV As A Pipeline",
    subtitle: "Stream raw rows into validated domain objects.",
    difficulty: "Stage 8",
    xp: 160,
    minutes: 35,
    tags: ["csv", "generators", "comprehensions"],
    deliverable: "Add projectpulse import issues.csv to read rows, validate them, skip duplicates, and show an import summary.",
    buildSteps: [
      "Use csv.DictReader to parse rows by column name.",
      "Write a generator that yields one validated Issue at a time.",
      "Track duplicate titles with a set and count imported, skipped, and failed rows."
    ],
    lesson: [
      "Generators keep import code memory-friendly and naturally pipeline-shaped.",
      "Sets are ideal for fast duplicate checks when identity is hashable.",
      "A summary object is often better than printing from deep inside parsing code."
    ],
    challenge: {
      type: "choice",
      prompt: "Which function streams issues instead of materializing them all first?",
      code: `def parse_rows(rows):
    ...`,
      options: [
        "for row in rows: yield issue_from_row(row)",
        "return [issue_from_row(row) for row in rows]",
        "return tuple(issue_from_row(row) for row in rows)",
        "print(rows)"
      ],
      answer: 0,
      explanation: "yield makes parse_rows a generator, so callers can process issues one at a time."
    }
  },
  {
    id: "analytics-engine",
    track: "data",
    title: "Build The Analytics Engine",
    subtitle: "Turn issue records into useful engineering signals.",
    difficulty: "Stage 9",
    xp: 170,
    minutes: 40,
    tags: ["collections", "sorting", "aggregation"],
    deliverable: "Implement report output with counts by status, priority, tag, oldest open issue, and average close time.",
    buildSteps: [
      "Use Counter for grouped counts.",
      "Use sorted with key functions for priority and age ranking.",
      "Return a Report dataclass so CLI formatting stays separate from calculation."
    ],
    lesson: [
      "Data structures should match questions: Counter for counts, dict for indexes, list for ordered results.",
      "Analytics code is easier to trust when calculation and presentation are separate.",
      "Small key functions make sorting behavior explicit and testable."
    ],
    challenge: {
      type: "fill",
      prompt: "Fill the expression that counts issues by status.",
      code: `from collections import Counter

status_counts = Counter(____ for issue in issues)`,
      answers: ["issue.status"],
      placeholder: "group key",
      explanation: "Counter consumes each issue.status value and produces grouped totals."
    }
  },
  {
    id: "argparse-cli",
    track: "interfaces",
    title: "Design The CLI",
    subtitle: "Expose the project through real terminal commands.",
    difficulty: "Stage 10",
    xp: 180,
    minutes: 45,
    tags: ["argparse", "cli", "interfaces"],
    deliverable: "Implement argparse subcommands: add, list, close, import, report, and migrate.",
    buildSteps: [
      "Create one parser and subparsers for each command.",
      "Map each parsed command to a command function.",
      "Return exit codes and user-facing messages from the CLI boundary."
    ],
    lesson: [
      "argparse is enough for a serious CLI when commands and options are designed cleanly.",
      "The parser should translate strings into intent; core functions should execute that intent.",
      "Good CLI output is stable enough for humans to learn and for tests to assert."
    ],
    challenge: {
      type: "choice",
      prompt: "Where should terminal printing mostly live?",
      code: `# ProjectPulse layers:
# cli.py, services.py, storage.py, analytics.py`,
      options: [
        "cli.py, at the boundary after command functions return results",
        "storage.py, every time a row is fetched",
        "models.py, inside every dataclass constructor",
        "analytics.py, mixed into every calculation"
      ],
      answer: 0,
      explanation: "Keeping printing at the CLI boundary preserves reusable, testable core logic."
    }
  },
  {
    id: "decorators-logging",
    track: "interfaces",
    title: "Add Decorators And Logging",
    subtitle: "Instrument command execution without tangling the core logic.",
    difficulty: "Stage 11",
    xp: 150,
    minutes: 30,
    tags: ["decorators", "logging", "wrappers"],
    deliverable: "Create a @timed_command decorator that logs command duration while preserving function metadata.",
    buildSteps: [
      "Use logging instead of print for diagnostic messages.",
      "Wrap command functions with a decorator that records duration.",
      "Use functools.wraps so help, tests, and debugging still see the original function name."
    ],
    lesson: [
      "A decorator takes a function and returns a replacement function.",
      "Instrumentation is a good decorator use case because it surrounds existing behavior.",
      "functools.wraps preserves metadata that tools and humans rely on."
    ],
    challenge: {
      type: "fill",
      prompt: "Fill the decorator that preserves wrapper metadata.",
      code: `from functools import wraps

def timed_command(fn):
    @____
    def wrapper(*args, **kwargs):
        return fn(*args, **kwargs)
    return wrapper`,
      answers: ["wraps(fn)"],
      placeholder: "decorator call",
      explanation: "@wraps(fn) copies the original function metadata onto the wrapper."
    }
  },
  {
    id: "async-enrichment",
    track: "interfaces",
    title: "Async Enrichment",
    subtitle: "Fetch optional metadata concurrently without blocking every issue.",
    difficulty: "Stage 12",
    xp: 190,
    minutes: 45,
    tags: ["async", "await", "io"],
    deliverable: "Add an optional enrich command that concurrently fetches mocked owner metadata for many issues.",
    buildSteps: [
      "Write async functions for I/O-shaped work and await them from an async command path.",
      "Use asyncio.gather when independent requests can run concurrently.",
      "Keep CPU-heavy analytics synchronous unless profiling proves otherwise."
    ],
    lesson: [
      "asyncio helps when tasks spend time waiting on I/O.",
      "await yields control to the event loop so other tasks can make progress.",
      "Concurrency is not the same as parallel CPU execution."
    ],
    challenge: {
      type: "fill",
      prompt: "Fill the expression that awaits all independent enrichment jobs.",
      code: `jobs = [fetch_owner(issue.owner_id) for issue in issues]
owners = await ____`,
      answers: ["asyncio.gather(*jobs)"],
      placeholder: "awaitable group",
      explanation: "asyncio.gather(*jobs) runs independent awaitables concurrently and returns their results in order."
    }
  },
  {
    id: "test-suite",
    track: "quality",
    title: "Build A Test Suite",
    subtitle: "Protect behavior before the project grows.",
    difficulty: "Stage 13",
    xp: 180,
    minutes: 45,
    tags: ["testing", "fixtures", "regression"],
    deliverable: "Add tests for validation, repositories, imports, analytics, and CLI command behavior.",
    buildSteps: [
      "Start with tests for behavior that would hurt if it regressed.",
      "Use temporary files or test databases so tests do not touch real user data.",
      "Name tests after observable outcomes, not implementation details."
    ],
    lesson: [
      "A good test says what behavior the project promises.",
      "Fixtures make setup readable and reduce duplication.",
      "Regression tests should fail before the fix and pass after it."
    ],
    challenge: {
      type: "choice",
      prompt: "Which test name best protects ProjectPulse behavior?",
      code: `def close_issue(repo, issue_id):
    ...`,
      options: [
        "test_close_issue_marks_open_issue_closed",
        "test_line_42_runs",
        "test_uses_for_loop",
        "test_function_exists"
      ],
      answer: 0,
      explanation: "The name describes the user-visible behavior without locking the implementation."
    }
  },
  {
    id: "typing-protocols",
    track: "quality",
    title: "Type The Boundaries",
    subtitle: "Use Protocols so JSON and SQLite repositories share one contract.",
    difficulty: "Stage 14",
    xp: 170,
    minutes: 40,
    tags: ["typing", "protocols", "architecture"],
    deliverable: "Define an IssueRepository Protocol and annotate service functions against it.",
    buildSteps: [
      "Create a Protocol with add, update, find_by_id, and find_all methods.",
      "Annotate command functions with the protocol instead of a concrete repository class.",
      "Use type hints as design documentation for module boundaries."
    ],
    lesson: [
      "Structural typing focuses on what an object can do, not what class it inherits from.",
      "Protocols make swapping JSON and SQLite repositories explicit and testable.",
      "Type hints do not replace tests, but they catch contract drift earlier."
    ],
    challenge: {
      type: "choice",
      prompt: "Which type should services depend on?",
      code: `def add_issue(repo: ____, title: str) -> Issue:
    ...`,
      options: [
        "IssueRepository Protocol",
        "Only JsonIssueRepository forever",
        "A raw dict with unknown keys",
        "Any object without documented methods"
      ],
      answer: 0,
      explanation: "Depending on a Protocol keeps services independent from the concrete storage backend."
    }
  },
  {
    id: "ship-project",
    track: "quality",
    title: "Ship The Project",
    subtitle: "Make ProjectPulse installable, documented, and demo-ready.",
    difficulty: "Stage 15",
    xp: 210,
    minutes: 50,
    tags: ["packaging", "docs", "release"],
    deliverable: "Finish pyproject.toml, console script entry point, README demo, sample CSV, and a release checklist.",
    buildSteps: [
      "Add a console_scripts entry point so projectpulse runs after installation.",
      "Document setup, commands, data location, and testing instructions.",
      "Run the full demo from a clean checkout and fix any missing steps."
    ],
    lesson: [
      "Shipping is part of engineering: a project is not done until someone else can run it.",
      "pyproject.toml is the modern home for package metadata and tool configuration.",
      "A final clean-room run catches assumptions hidden in your local environment."
    ],
    challenge: {
      type: "choice",
      prompt: "Which pyproject entry makes the CLI install as projectpulse?",
      code: `[project.scripts]
____`,
      options: [
        "projectpulse = \"projectpulse.cli:main\"",
        "projectpulse = \"README.md\"",
        "projectpulse = \"tests:test_all\"",
        "projectpulse = \"python app.py\""
      ],
      answer: 0,
      explanation: "The script entry maps a terminal command name to an importable function."
    }
  }
];

const CODEX = [
  {
    id: "project-slices",
    title: "Project Slices",
    track: "blueprint",
    tags: ["scope", "architecture"],
    summary: "Build one vertical slice at a time: input, validation, domain logic, persistence, output, and tests.",
    drill: "For the next feature, write the terminal command, expected output, and storage change before coding."
  },
  {
    id: "module-boundaries",
    title: "Module Boundaries",
    track: "blueprint",
    tags: ["modules", "imports"],
    summary: "A module should own a reason to change: CLI parsing, models, storage, analytics, or tests.",
    drill: "Move code that prints from storage.py into cli.py, then test storage without terminal output."
  },
  {
    id: "domain-modeling",
    title: "Domain Modeling",
    track: "core",
    tags: ["dataclasses", "oop"],
    summary: "Dataclasses are a compact way to make project records explicit while preserving normal Python behavior.",
    drill: "Replace one loose issue dictionary with an Issue dataclass and update the calling code."
  },
  {
    id: "error-boundaries",
    title: "Error Boundaries",
    track: "core",
    tags: ["exceptions", "validation"],
    summary: "Raise specific exceptions inside the app and translate them into user-facing messages at the CLI boundary.",
    drill: "Add one custom exception for an expected user mistake and assert the CLI message in a test."
  },
  {
    id: "repositories",
    title: "Repositories",
    track: "data",
    tags: ["json", "sqlite", "protocols"],
    summary: "A repository hides persistence details so the rest of the program can work with Issue objects.",
    drill: "Make a service function pass against both an in-memory fake repository and the SQLite repository."
  },
  {
    id: "streaming-imports",
    title: "Streaming Imports",
    track: "data",
    tags: ["generators", "csv"],
    summary: "Generators let import pipelines validate and save one record at a time without loading the whole file.",
    drill: "Turn a list-building import function into a yield-based parser."
  },
  {
    id: "cli-contracts",
    title: "CLI Contracts",
    track: "interfaces",
    tags: ["argparse", "ux"],
    summary: "A CLI command is a contract: accepted arguments, exit code, output, and side effects.",
    drill: "Write one CLI test that captures output and verifies the exit code."
  },
  {
    id: "async-fit",
    title: "Async Fit",
    track: "interfaces",
    tags: ["async", "io"],
    summary: "Use async when many tasks wait on I/O. Keep normal synchronous code where it is simpler and fast enough.",
    drill: "Mock three slow owner lookups and compare sequential await with asyncio.gather."
  },
  {
    id: "release-readiness",
    title: "Release Readiness",
    track: "quality",
    tags: ["tests", "packaging"],
    summary: "A project is release-ready when a clean checkout can install, run tests, and complete the README demo.",
    drill: "Delete local generated data, rerun the README from top to bottom, and patch every missing instruction."
  }
];

const BADGES = [
  {
    id: "architect",
    name: "Project Architect",
    symbol: "PA",
    detail: "Complete the blueprint phase.",
    earned: state => trackComplete(state, "blueprint")
  },
  {
    id: "domain-smith",
    name: "Domain Smith",
    symbol: "DS",
    detail: "Model, validate, and command the core engine.",
    earned: state => trackComplete(state, "core")
  },
  {
    id: "data-runner",
    name: "Data Runner",
    symbol: "DR",
    detail: "Ship JSON, SQLite, CSV import, and analytics.",
    earned: state => trackComplete(state, "data")
  },
  {
    id: "interface-maker",
    name: "Interface Maker",
    symbol: "IM",
    detail: "Finish CLI, logging decorators, and async enrichment.",
    earned: state => trackComplete(state, "interfaces")
  },
  {
    id: "release-engineer",
    name: "Release Engineer",
    symbol: "RE",
    detail: "Complete tests, typing, protocols, and packaging.",
    earned: state => trackComplete(state, "quality")
  },
  {
    id: "capstone-clear",
    name: "Capstone Clear",
    symbol: "CC",
    detail: "Complete every ProjectPulse build step.",
    earned: state => QUESTS.every(quest => state.completed.includes(quest.id))
  },
  {
    id: "perfect-run",
    name: "Perfect Run",
    symbol: "PX",
    detail: "Clear a review arena run without a miss.",
    earned: state => state.perfectArenaRuns > 0
  }
];

const defaultState = {
  xp: 0,
  completed: [],
  reviewed: [],
  selectedTrack: "blueprint",
  activeQuest: "project-charter",
  view: "dashboard",
  answers: {},
  feedback: {},
  streak: 0,
  lastStudyDate: "",
  theme: "light",
  codexFilter: "all",
  codexSearch: "",
  arenaClears: 0,
  perfectArenaRuns: 0
};

let state = loadState();
let arena = {
  active: false,
  ids: [],
  index: 0,
  correct: 0,
  feedback: "",
  selected: null,
  locked: false,
  finished: false
};

const viewMeta = {
  dashboard: ["Python project lab", "Dashboard"],
  missions: ["Guided build path", "Build Path"],
  arena: ["Mixed project checkpoints", "Review Arena"],
  codex: ["Concept cards and project drills", "Project Codex"],
  progress: ["Build progress and badges", "Progress"]
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...stored };
  } catch (error) {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function $(selector) {
  return document.querySelector(selector);
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name) {
  return `<span class="icon" aria-hidden="true">${ICONS[name] || ""}</span>`;
}

function getQuest(id) {
  return QUESTS.find(quest => quest.id === id);
}

function getTrack(id) {
  return TRACKS.find(track => track.id === id);
}

function questsForTrack(trackId) {
  return QUESTS.filter(quest => quest.track === trackId);
}

function completedCount(trackId) {
  return questsForTrack(trackId).filter(quest => state.completed.includes(quest.id)).length;
}

function trackComplete(currentState, trackId) {
  const ids = questsForTrack(trackId).map(quest => quest.id);
  return ids.length > 0 && ids.every(id => currentState.completed.includes(id));
}

function earnedBadges() {
  return BADGES.filter(badge => badge.earned(state));
}

function levelInfo() {
  const level = Math.floor(state.xp / 500) + 1;
  const currentFloor = (level - 1) * 500;
  const nextFloor = level * 500;
  const progress = Math.min(100, Math.round(((state.xp - currentFloor) / (nextFloor - currentFloor)) * 100));
  return { level, currentFloor, nextFloor, progress };
}

function todayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function yesterdayKey() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return todayKey(date);
}

function updateStreak() {
  const today = todayKey();
  if (state.lastStudyDate === today) return;
  state.streak = state.lastStudyDate === yesterdayKey() ? state.streak + 1 : 1;
  state.lastStudyDate = today;
}

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach(node => {
    const name = node.dataset.icon;
    node.innerHTML = ICONS[name] || "";
  });
}

function setView(view) {
  state.view = view;
  saveState();
  render();
}

function setActiveQuest(id) {
  const quest = getQuest(id);
  if (!quest) return;
  state.activeQuest = id;
  state.selectedTrack = quest.track;
  state.view = "missions";
  saveState();
  render();
}

function nextQuest() {
  return QUESTS.find(quest => !state.completed.includes(quest.id)) || QUESTS[0];
}

function normalizeAnswer(value) {
  return String(value).trim().replace(/\s+/g, " ").toLowerCase();
}

function answerIsCorrect(quest, value) {
  const challenge = quest.challenge;
  if (challenge.type === "choice") {
    return Number(value) === challenge.answer;
  }

  if (challenge.type === "fill") {
    return challenge.answers.map(normalizeAnswer).includes(normalizeAnswer(value));
  }

  return false;
}

function completeQuest(quest) {
  const alreadyComplete = state.completed.includes(quest.id);
  if (!alreadyComplete) {
    state.completed.push(quest.id);
    state.xp += quest.xp;
    updateStreak();
    toast(`Build step shipped: +${quest.xp} XP`);
  } else {
    toast("Review locked in");
  }
  saveState();
}

function submitQuestAnswer(questId) {
  const quest = getQuest(questId);
  if (!quest) return;
  const value = state.answers[questId];
  if (value === undefined || value === "") {
    toast("Choose or enter an answer first");
    return;
  }

  const correct = answerIsCorrect(quest, value);
  state.feedback[questId] = {
    correct,
    text: correct ? quest.challenge.explanation : `Not quite. ${quest.challenge.explanation}`
  };

  if (correct) {
    completeQuest(quest);
  } else {
    saveState();
    toast("Review the checkpoint and try again");
  }
  render();
}

function toggleReview(questId) {
  if (state.reviewed.includes(questId)) {
    state.reviewed = state.reviewed.filter(id => id !== questId);
  } else {
    state.reviewed.push(questId);
  }
  saveState();
  render();
}

function resetProgress() {
  if (!window.confirm("Reset PyForge progress on this browser?")) return;
  state = { ...defaultState, theme: state.theme };
  arena = { active: false, ids: [], index: 0, correct: 0, feedback: "", selected: null, locked: false, finished: false };
  saveState();
  render();
  toast("Progress reset");
}

function renderShell() {
  if (!viewMeta[state.view]) {
    state.view = "dashboard";
  }
  const { level, progress } = levelInfo();
  $("#levelLabel").textContent = `Level ${level}`;
  $("#streakLabel").textContent = `${state.streak} day streak`;
  $("#xpLabel").textContent = `${state.xp} XP`;
  $("#badgeLabel").textContent = `${earnedBadges().length} badges`;
  $("#xpFill").style.width = `${progress}%`;

  const [eyebrow, title] = viewMeta[state.view] || viewMeta.dashboard;
  $("#viewEyebrow").textContent = eyebrow;
  $("#viewTitle").textContent = title;

  document.querySelectorAll(".nav-button").forEach(button => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });

  document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
  $(`#${state.view}View`).classList.add("active");

  document.body.dataset.theme = state.theme;
  const themeIcon = document.querySelector('[data-action="toggle-theme"] [data-icon]');
  if (themeIcon) {
    themeIcon.dataset.icon = state.theme === "dark" ? "moon" : "sun";
  }
}

function renderDashboard() {
  const next = nextQuest();
  const totalXP = QUESTS.reduce((sum, quest) => sum + quest.xp, 0);
  const completedXP = QUESTS.filter(quest => state.completed.includes(quest.id)).reduce((sum, quest) => sum + quest.xp, 0);
  const upcoming = QUESTS.filter(quest => !state.completed.includes(quest.id)).slice(0, 4);
  const queue = upcoming.length ? upcoming : QUESTS.slice(0, 4);

  $("#dashboardView").innerHTML = `
    <div class="dashboard-grid">
      <section class="focus-band">
        <div class="focus-copy">
          <div>
            <p class="eyebrow">Current build step</p>
            <h2>${esc(next.title)}</h2>
            <p>${esc(next.subtitle)} ${esc(PROJECT.tagline)} ${esc(PROJECT.outcome)}</p>
            <div class="focus-actions">
              <button class="primary-button" type="button" data-quest="${esc(next.id)}">
                ${icon("play")} Continue build
              </button>
              <button class="secondary-button" type="button" data-action="start-arena">
                ${icon("sword")} Start arena
              </button>
            </div>
          </div>
          <div class="metric-strip" aria-label="Learning stats">
            <div class="metric-tile">
              <span class="metric-value">${state.completed.length}/${QUESTS.length}</span>
              <span class="metric-label">build steps shipped</span>
            </div>
            <div class="metric-tile">
              <span class="metric-value">${completedXP}</span>
              <span class="metric-label">of ${totalXP} project XP</span>
            </div>
            <div class="metric-tile">
              <span class="metric-value">${earnedBadges().length}/${BADGES.length}</span>
              <span class="metric-label">badges earned</span>
            </div>
          </div>
        </div>
        <div class="map-panel">${renderSkillMap()}</div>
      </section>

      <aside class="side-stack" aria-label="Build queue">
        <section>
          <div class="section-heading">
            <div>
              <h2>Build Queue</h2>
              <p>${state.completed.length === QUESTS.length ? "Project route cleared. Review any checkpoint to keep the streak active." : "The next unfinished project steps are ready."}</p>
            </div>
          </div>
          <div class="queue-list">
            ${queue.map((quest, index) => renderQueueItem(quest, index)).join("")}
          </div>
        </section>

        <section>
          <div class="section-heading">
            <div>
              <h2>Recent Badges</h2>
              <p>${earnedBadges().length ? "Unlocked achievements are stored on this browser." : "Badges unlock as project phases and arena runs land."}</p>
            </div>
          </div>
          <div class="badge-list">
            ${renderCompactBadges()}
          </div>
        </section>
      </aside>
    </div>
  `;
}

function renderQueueItem(quest, index) {
  const done = state.completed.includes(quest.id);
  return `
    <article class="queue-item">
      <span class="queue-rank">${done ? icon("check") : index + 1}</span>
      <div class="queue-copy">
        <strong>${esc(quest.title)}</strong>
        <span>${esc(getTrack(quest.track).title)} | ${quest.minutes} min | ${quest.xp} XP</span>
      </div>
      <button class="compact-button" type="button" data-quest="${esc(quest.id)}" aria-label="Open ${esc(quest.title)}">
        ${icon("arrow")}
      </button>
    </article>
  `;
}

function renderCompactBadges() {
  const badges = earnedBadges();
  if (!badges.length) {
    return `
      <article class="queue-item">
        <span class="queue-rank">${icon("spark")}</span>
        <div class="queue-copy">
          <strong>Badge slots empty</strong>
          <span>Ship full project phases to unlock the first one.</span>
        </div>
      </article>
    `;
  }

  return badges.slice(-3).map(badge => `
    <article class="queue-item">
      <span class="queue-rank">${esc(badge.symbol)}</span>
      <div class="queue-copy">
        <strong>${esc(badge.name)}</strong>
        <span>${esc(badge.detail)}</span>
      </div>
    </article>
  `).join("");
}

function renderSkillMap() {
  const patternId = `gridPattern-${Math.random().toString(36).slice(2)}`;
  const nodePositions = [
    ["blueprint", 92, 210],
    ["core", 220, 92],
    ["data", 384, 138],
    ["interfaces", 522, 240],
    ["quality", 390, 350]
  ];

  const links = [
    ["blueprint", "core"],
    ["core", "data"],
    ["data", "interfaces"],
    ["interfaces", "quality"],
    ["blueprint", "quality"]
  ];

  const positionMap = Object.fromEntries(nodePositions.map(([id, x, y]) => [id, { x, y }]));

  return `
    <svg class="skill-map" viewBox="0 0 620 430" role="img" aria-label="Python skill map">
      <defs>
        <pattern id="${patternId}" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.16"></path>
        </pattern>
      </defs>
      <rect x="0" y="0" width="620" height="430" rx="8" fill="url(#${patternId})" opacity="0.8"></rect>
      ${links.map(([from, to]) => {
        const a = positionMap[from];
        const b = positionMap[to];
        return `<line class="map-link" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"></line>`;
      }).join("")}
      ${nodePositions.map(([id, x, y]) => {
        const track = getTrack(id);
        const total = questsForTrack(id).length;
        const complete = completedCount(id);
        const radius = 28 + complete * 4;
        return `
          <g class="map-node" tabindex="0" data-track="${esc(id)}" transform="translate(${x} ${y})">
            <circle r="${radius}" fill="${track.color}"></circle>
            <text text-anchor="middle" y="-2">${esc(track.icon)}</text>
            <text text-anchor="middle" y="16">${complete}/${total}</text>
          </g>
        `;
      }).join("")}
    </svg>
  `;
}

function renderMissions() {
  const activeQuest = getQuest(state.activeQuest) || nextQuest();
  const track = getTrack(state.selectedTrack) || TRACKS[0];

  $("#missionsView").innerHTML = `
    <section class="track-grid" aria-label="Project phases">
      ${TRACKS.map(item => renderTrackCard(item)).join("")}
    </section>

    <div class="section-heading">
      <div>
        <h2>${esc(track.title)}</h2>
        <p>${esc(track.brief)}</p>
      </div>
    </div>

    <section class="quest-layout">
      <div class="quest-grid">
        ${questsForTrack(track.id).map(quest => renderQuestCard(quest, activeQuest.id)).join("")}
      </div>
      <div class="quest-lab">
        ${renderQuestLab(activeQuest)}
      </div>
    </section>
  `;
}

function renderTrackCard(track) {
  const total = questsForTrack(track.id).length;
  const complete = completedCount(track.id);
  const percent = total ? Math.round((complete / total) * 100) : 0;
  return `
    <button class="track-card ${state.selectedTrack === track.id ? "active" : ""}" type="button" data-track="${esc(track.id)}">
      <span class="track-icon" style="background:${track.color}">${esc(track.icon)}</span>
      <span>
        <strong>${esc(track.title)}</strong>
        <span class="track-meta">${complete}/${total} complete</span>
      </span>
      <span class="progress-rail"><span style="width:${percent}%"></span></span>
    </button>
  `;
}

function renderQuestCard(quest, activeId) {
  const complete = state.completed.includes(quest.id);
  const review = state.reviewed.includes(quest.id);
  return `
    <button class="quest-card ${complete ? "complete" : ""} ${activeId === quest.id ? "active" : ""}" type="button" data-quest="${esc(quest.id)}">
      <span>
        <strong>${esc(quest.title)}</strong>
        <span class="quest-meta">${esc(quest.difficulty)} | ${quest.minutes} min | ${quest.xp} XP</span>
      </span>
      <span>${esc(quest.subtitle)}</span>
      <span class="quest-tags">
        ${quest.tags.slice(0, 3).map(tag => `<span class="tag ${complete ? "done" : ""}">${esc(tag)}</span>`).join("")}
        ${review ? `<span class="tag done">review</span>` : ""}
      </span>
    </button>
  `;
}

function renderQuestLab(quest) {
  if (!quest) {
    return `<section class="lab-panel"><h2>No build step selected</h2></section>`;
  }

  return `
    <section class="lab-panel">
      <div class="section-heading">
        <div>
          <h2>${esc(quest.title)}</h2>
          <p>${esc(quest.subtitle)}</p>
        </div>
      </div>
      <div class="deliverable-box">
        <strong>Deliverable</strong>
        <p>${esc(quest.deliverable)}</p>
      </div>
      <h3>Build Checklist</h3>
      <ul class="lesson-list">
        ${quest.buildSteps.map(item => `<li>${esc(item)}</li>`).join("")}
      </ul>
      <h3>Concepts You Will Use</h3>
      <ul class="lesson-list">
        ${quest.lesson.map(item => `<li>${esc(item)}</li>`).join("")}
      </ul>
      <div class="quest-tags" aria-label="Build step tags">
        ${quest.tags.map(tag => `<span class="tag">${esc(tag)}</span>`).join("")}
      </div>
      <div class="lab-actions">
        <button class="secondary-button" type="button" data-action="toggle-review" data-quest-id="${esc(quest.id)}">
          ${icon("bookmark")} ${state.reviewed.includes(quest.id) ? "Marked" : "Mark review"}
        </button>
      </div>
    </section>
    <section class="lab-panel">
      ${renderChallenge(quest, "quest")}
    </section>
  `;
}

function renderChallenge(quest, mode) {
  const challenge = quest.challenge;
  const selected = mode === "arena" ? arena.selected : state.answers[quest.id];
  const feedback = mode === "arena" ? arena.feedback : state.feedback[quest.id];
  const submitAction = mode === "arena" ? "submit-arena" : "submit-quest";
  const submitDisabled = mode === "arena" && arena.locked ? "disabled" : "";

  return `
    <p class="challenge-prompt">${esc(challenge.prompt)}</p>
    <pre class="code-block"><code>${esc(challenge.code)}</code></pre>
    ${challenge.type === "choice" ? renderChoiceAnswers(quest, selected, feedback, mode) : renderFillAnswer(quest, selected, mode)}
    <div class="lab-actions">
      <button class="primary-button" type="button" data-action="${submitAction}" data-quest-id="${esc(quest.id)}" ${submitDisabled}>
        ${icon("check")} ${mode === "arena" ? "Submit answer" : "Ship checkpoint"}
      </button>
      ${mode === "arena" ? "" : `<button class="secondary-button" type="button" data-action="next-mission">${icon("arrow")} Next unfinished</button>`}
    </div>
    ${renderFeedback(feedback)}
  `;
}

function renderChoiceAnswers(quest, selected, feedback, mode) {
  return `
    <div class="answer-grid">
      ${quest.challenge.options.map((option, index) => {
        const selectedClass = Number(selected) === index ? "selected" : "";
        const resultClass = feedback
          ? index === quest.challenge.answer
            ? "correct"
            : Number(selected) === index
              ? "incorrect"
              : ""
          : "";
        return `
          <button class="answer-button ${selectedClass} ${resultClass}" type="button" data-action="${mode === "arena" ? "select-arena-answer" : "select-answer"}" data-quest-id="${esc(quest.id)}" data-answer="${index}">
            <span class="answer-key">${String.fromCharCode(65 + index)}</span>
            <span>${esc(option)}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderFillAnswer(quest, selected, mode) {
  return `
    <input class="fill-input" type="text" data-action="${mode === "arena" ? "fill-arena-answer" : "fill-answer"}" data-quest-id="${esc(quest.id)}" value="${esc(selected || "")}" placeholder="${esc(quest.challenge.placeholder || "answer")}" autocomplete="off">
  `;
}

function renderFeedback(feedback) {
  if (!feedback) {
    return `<div class="feedback">Answer the checkpoint to ship this step.</div>`;
  }

  if (typeof feedback === "string") {
    return `<div class="feedback">${esc(feedback)}</div>`;
  }

  return `<div class="feedback ${feedback.correct ? "good" : "bad"}">${esc(feedback.text)}</div>`;
}

function startArena() {
  const unresolved = QUESTS.filter(quest => !state.completed.includes(quest.id));
  const pool = unresolved.length >= 5 ? unresolved : QUESTS;
  const ids = [...pool]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map(quest => quest.id);

  arena = {
    active: true,
    ids,
    index: 0,
    correct: 0,
    feedback: "",
    selected: null,
    locked: false,
    finished: false
  };
  state.view = "arena";
  saveState();
  render();
}

function submitArena() {
  if (!arena.active || arena.finished || arena.locked) return;
  const quest = getQuest(arena.ids[arena.index]);
  if (!quest) return;

  if (arena.selected === null || arena.selected === "") {
    toast("Answer the arena prompt first");
    return;
  }

  const correct = answerIsCorrect(quest, arena.selected);
  if (correct) arena.correct += 1;
  arena.locked = true;

  arena.feedback = {
    correct,
    text: correct ? quest.challenge.explanation : `Missed. ${quest.challenge.explanation}`
  };

  setTimeout(() => {
    if (arena.index < arena.ids.length - 1) {
      arena.index += 1;
      arena.selected = null;
      arena.feedback = "";
      arena.locked = false;
    } else {
      const perfect = arena.correct === arena.ids.length;
      const bonus = arena.correct * 40 + (perfect ? 100 : 0);
      arena.finished = true;
      arena.active = false;
      arena.locked = false;
      state.xp += bonus;
      state.arenaClears += 1;
      if (perfect) state.perfectArenaRuns += 1;
      updateStreak();
      toast(`Arena clear: +${bonus} XP`);
      saveState();
    }
    render();
  }, 900);

  render();
}

function renderArena() {
  const currentQuest = arena.active || arena.finished ? getQuest(arena.ids[arena.index]) : nextQuest();
  const accuracy = arena.ids.length ? Math.round((arena.correct / arena.ids.length) * 100) : 0;

  $("#arenaView").innerHTML = `
    <section class="arena-layout">
      <div class="arena-panel highlight">
        <div class="section-heading">
          <div>
            <h2>${arena.finished ? "Arena Clear" : arena.active ? `Round ${arena.index + 1} of ${arena.ids.length}` : "Focus Run"}</h2>
            <p>${arena.active ? esc(getTrack(currentQuest.track).title) : "Five mixed prompts from the ProjectPulse build route."}</p>
          </div>
        </div>
        ${arena.active ? renderChallenge(currentQuest, "arena") : renderArenaStart()}
      </div>

      <aside class="side-stack">
        <section class="arena-score">
          <div class="stat-card">
            <span class="metric-value">${arena.correct}</span>
            <span class="metric-label">correct this run</span>
          </div>
          <div class="stat-card">
            <span class="metric-value">${accuracy}%</span>
            <span class="metric-label">current accuracy</span>
          </div>
          <div class="stat-card">
            <span class="metric-value">${state.arenaClears}</span>
            <span class="metric-label">arena clears</span>
          </div>
        </section>
        <section class="arena-panel">
          <h2>Boss Mix</h2>
          <div class="queue-list">
            ${(arena.ids.length ? arena.ids : QUESTS.slice(0, 5).map(quest => quest.id)).map((id, index) => {
              const quest = getQuest(id);
              const active = arena.active && arena.index === index;
              return `
                <article class="queue-item">
                  <span class="queue-rank">${active ? icon("play") : index + 1}</span>
                  <div class="queue-copy">
                    <strong>${esc(quest.title)}</strong>
                    <span>${esc(getTrack(quest.track).title)}</span>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        </section>
      </aside>
    </section>
  `;
}

function renderArenaStart() {
  const result = arena.finished
    ? `<p>You scored ${arena.correct}/${arena.ids.length}. Perfect clears unlock the Perfect Run badge.</p>`
    : `<p>Arena runs reinforce the decisions you make while building ProjectPulse end to end.</p>`;

  return `
    ${result}
    <div class="lab-actions">
      <button class="primary-button" type="button" data-action="start-arena">${icon("play")} Start run</button>
      <button class="secondary-button" type="button" data-view="missions">${icon("map")} Review build path</button>
    </div>
  `;
}

function renderCodex() {
  const filters = ["all", ...TRACKS.map(track => track.id)];
  const search = normalizeAnswer(state.codexSearch);
  const cards = CODEX.filter(card => {
    const filterMatch = state.codexFilter === "all" || card.track === state.codexFilter;
    const searchable = normalizeAnswer(`${card.title} ${card.summary} ${card.tags.join(" ")}`);
    return filterMatch && (!search || searchable.includes(search));
  });

  $("#codexView").innerHTML = `
    <section>
      <div class="codex-toolbar">
        <input class="search-input" type="search" value="${esc(state.codexSearch)}" data-action="search-codex" placeholder="Search concepts">
        ${filters.map(filter => {
          const label = filter === "all" ? "All" : getTrack(filter).icon;
          const title = filter === "all" ? "All tracks" : getTrack(filter).title;
          return `<button class="chip-button ${state.codexFilter === filter ? "active" : ""}" type="button" data-codex-filter="${esc(filter)}" title="${esc(title)}">${esc(label)}</button>`;
        }).join("")}
      </div>
      <div class="codex-grid">
        ${cards.map(renderCodexCard).join("") || `<article class="codex-card"><h2>No matches</h2><p>Try another concept, track, or tag.</p></article>`}
      </div>
    </section>
  `;
}

function renderCodexCard(card) {
  const track = getTrack(card.track);
  return `
    <article class="codex-card">
      <span class="track-icon" style="background:${track.color}">${esc(track.icon)}</span>
      <div>
        <h2>${esc(card.title)}</h2>
        <p class="codex-meta">${esc(track.title)}</p>
      </div>
      <p>${esc(card.summary)}</p>
      <p><strong>Apply:</strong> ${esc(card.drill)}</p>
      <div class="concept-tags">
        ${card.tags.map(tag => `<span class="tag">${esc(tag)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderProgress() {
  const { level, nextFloor } = levelInfo();
  const badges = earnedBadges();

  $("#progressView").innerHTML = `
    <section class="progress-grid">
      <div class="side-stack">
        <section class="focus-band">
          <div class="focus-copy">
            <div>
              <p class="eyebrow">Project map</p>
              <h2>Level ${level}</h2>
              <p>${state.xp} XP banked. ${Math.max(0, nextFloor - state.xp)} XP remains before the next level.</p>
            </div>
            <div class="skill-meter-list">
              ${TRACKS.map(renderSkillRow).join("")}
            </div>
          </div>
          <div class="map-panel">${renderSkillMap()}</div>
        </section>

        <section>
          <div class="section-heading">
            <div>
              <h2>Badge Vault</h2>
              <p>${badges.length}/${BADGES.length} achievements unlocked.</p>
            </div>
          </div>
          <div class="badge-grid">
            ${BADGES.map(renderBadge).join("")}
          </div>
        </section>
      </div>

      <aside class="side-stack">
        <section class="stat-card">
          <span class="metric-value">${state.completed.length}</span>
          <span class="metric-label">completed build steps</span>
        </section>
        <section class="stat-card">
          <span class="metric-value">${state.reviewed.length}</span>
          <span class="metric-label">marked for review</span>
        </section>
        <section class="stat-card">
          <span class="metric-value">${state.perfectArenaRuns}</span>
          <span class="metric-label">perfect arena clears</span>
        </section>
      </aside>
    </section>
  `;
}

function renderSkillRow(track) {
  const total = questsForTrack(track.id).length;
  const complete = completedCount(track.id);
  const percent = total ? Math.round((complete / total) * 100) : 0;
  return `
    <div class="skill-row">
      <div class="skill-row-top">
        <span>${esc(track.title)}</span>
        <span>${percent}%</span>
      </div>
      <div class="progress-rail"><span style="width:${percent}%"></span></div>
    </div>
  `;
}

function renderBadge(badge) {
  const earned = badge.earned(state);
  return `
    <article class="badge-card ${earned ? "" : "locked"}">
      <span class="badge-symbol">${esc(badge.symbol)}</span>
      <h3>${esc(badge.name)}</h3>
      <p class="badge-meta">${esc(badge.detail)}</p>
      <span class="tag ${earned ? "done" : ""}">${earned ? "unlocked" : "locked"}</span>
    </article>
  `;
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("show"), 2400);
}

function render() {
  renderShell();
  renderDashboard();
  renderMissions();
  renderArena();
  renderCodex();
  renderProgress();
  renderIcons();
}

document.addEventListener("click", event => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    setView(viewButton.dataset.view);
    return;
  }

  const questButton = event.target.closest("[data-quest]");
  if (questButton) {
    setActiveQuest(questButton.dataset.quest);
    return;
  }

  const trackButton = event.target.closest("[data-track]");
  if (trackButton) {
    state.selectedTrack = trackButton.dataset.track;
    const trackQuest = questsForTrack(state.selectedTrack)[0];
    if (trackQuest) state.activeQuest = trackQuest.id;
    if (trackButton.classList.contains("map-node")) {
      state.view = "missions";
    }
    saveState();
    render();
    return;
  }

  const codexFilter = event.target.closest("[data-codex-filter]");
  if (codexFilter) {
    state.codexFilter = codexFilter.dataset.codexFilter;
    saveState();
    render();
    return;
  }

  const action = event.target.closest("[data-action]");
  if (!action) return;

  switch (action.dataset.action) {
    case "toggle-theme":
      state.theme = state.theme === "dark" ? "light" : "dark";
      saveState();
      render();
      break;
    case "reset-progress":
      resetProgress();
      break;
    case "select-answer":
      state.answers[action.dataset.questId] = Number(action.dataset.answer);
      delete state.feedback[action.dataset.questId];
      saveState();
      render();
      break;
    case "submit-quest":
      submitQuestAnswer(action.dataset.questId);
      break;
    case "next-mission":
      setActiveQuest(nextQuest().id);
      break;
    case "toggle-review":
      toggleReview(action.dataset.questId);
      break;
    case "start-arena":
      startArena();
      break;
    case "select-arena-answer":
      if (arena.locked) return;
      arena.selected = Number(action.dataset.answer);
      render();
      break;
    case "submit-arena":
      submitArena();
      break;
    default:
      break;
  }
});

document.addEventListener("input", event => {
  const target = event.target;
  if (target.matches('[data-action="fill-answer"]')) {
    state.answers[target.dataset.questId] = target.value;
    delete state.feedback[target.dataset.questId];
    saveState();
    return;
  }

  if (target.matches('[data-action="fill-arena-answer"]')) {
    if (arena.locked) return;
    arena.selected = target.value;
    return;
  }

  if (target.matches('[data-action="search-codex"]')) {
    const cursor = target.selectionStart || target.value.length;
    state.codexSearch = target.value;
    saveState();
    renderCodex();
    const input = document.querySelector('[data-action="search-codex"]');
    if (input) {
      input.focus();
      input.setSelectionRange(cursor, cursor);
    }
  }
});

render();
