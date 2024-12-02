# WebSocket React App

This is a frontend application built with React and Vite, which connects to a WebSocket server, listens for five distinct events, and uses Redux to manage the state of the received messages. It demonstrates proper handling of WebSocket connections, event-driven state updates, and integration of Redux for state management.

## Features

- Connects to a WebSocket server.
- Listens for five distinct events (`event1`, `event2`, `event3`, `event4`, `event5`).
- Manages the state of messages using Redux.
- Displays notifications based on the event type (`info`, `success`, `warning`, `error`).
- Displays a "Waiting for messages..." message when no events have been received.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

## Setup

### 1. Clone the repository

Clone this repository to your local machine:

```bash
git clone https://github.com/olathedev/Bf-test2
cd websocket-react-app


