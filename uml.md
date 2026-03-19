# UML Diagrams <!-- markdownlint-disable-line first-line-heading -->

Demonstration of UML and diagram support using [Mermaid](https://mermaid.js.org/).

## Flowchart

```mermaid
flowchart TD
    A[Power On] --> B{Bootloader}
    B --> C[Load Kernel]
    C --> D[Init System]
    D --> E{Network OK?}
    E -- Yes --> F[Start Services]
    E -- No --> G[Retry Network]
    G --> E
    F --> H[Camera Ready]
    F --> I[Web Interface]
    F --> J[RTSP Stream]
```

## Sequence Diagram

```mermaid
sequenceDiagram
    participant C as Client
    participant W as Web UI
    participant A as API Server
    participant S as Sensor Driver

    C->>W: Open browser
    W->>A: GET /api/status
    A->>S: Query sensor
    S-->>A: Sensor data
    A-->>W: JSON response
    W-->>C: Render dashboard

    C->>W: Change resolution
    W->>A: POST /api/config
    A->>S: Apply settings
    S-->>A: OK
    A-->>W: 200 Success
    W-->>C: Updated view
```

## Class Diagram

```mermaid
classDiagram
    class Camera {
        +String model
        +String firmware
        +start()
        +stop()
        +getSnapshot()
    }
    class Sensor {
        +int width
        +int height
        +int fps
        +init()
        +capture()
    }
    class Encoder {
        +String codec
        +int bitrate
        +encode(frame)
    }
    class Network {
        +String ip
        +int port
        +stream(data)
    }

    Camera --> Sensor : uses
    Camera --> Encoder : uses
    Camera --> Network : uses
    Encoder ..> Sensor : reads frames
```

## State Diagram

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Recording : Start
    Recording --> Idle : Stop
    Recording --> Streaming : Enable RTSP
    Streaming --> Recording : Disable RTSP
    Recording --> Error : Failure
    Streaming --> Error : Failure
    Error --> Idle : Reset
    Idle --> [*] : Shutdown
```

## Gantt Chart

```mermaid
gantt
    title Firmware Update Process
    dateFormat  HH:mm
    axisFormat  %H:%M

    section Download
    Fetch firmware     :a1, 00:00, 3m
    Verify checksum    :a2, after a1, 1m

    section Install
    Backup config      :b1, after a2, 1m
    Flash firmware     :b2, after b1, 5m
    Verify flash       :b3, after b2, 1m

    section Restart
    Reboot device      :c1, after b3, 2m
    Restore config     :c2, after c1, 1m
    Health check       :c3, after c2, 1m
```

## Entity Relationship Diagram

```mermaid
erDiagram
    DEVICE ||--o{ STREAM : provides
    DEVICE {
        string mac_address PK
        string model
        string firmware_version
        string ip_address
    }
    STREAM {
        int id PK
        string codec
        int width
        int height
        int bitrate
    }
    DEVICE ||--|| SENSOR : has
    SENSOR {
        string type PK
        int max_width
        int max_height
        int max_fps
    }
    USER ||--o{ SESSION : opens
    USER {
        string username PK
        string role
    }
    SESSION {
        int id PK
        datetime started
        string ip_address
    }
```
