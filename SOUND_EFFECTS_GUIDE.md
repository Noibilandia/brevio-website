# Sound Effects Setup for Brevio Onboarding

## Overview
The onboarding flow has placeholder comments for sound effects. To add sound effects, you'll need to use the `audioplayers` package.

## Setup

### 1. Add Dependency
Add to `pubspec.yaml`:
```yaml
dependencies:
  audioplayers: ^5.2.1
```

### 2. Add Sound Files
Create `assets/sounds/` directory and add audio files:
```
assets/sounds/
├── whoosh.mp3          # Stage transitions
├── select.mp3          # App selection
├── connect.mp3         # App connection success
├── skip.mp3            # Skip action
├── type.mp3            # Typing sound (subtle)
└── success.mp3         # Completion sound
```

Update `pubspec.yaml`:
```yaml
flutter:
  assets:
    - assets/sounds/
```

### 3. Create Sound Service

Create `lib/services/sound_service.dart`:
```dart
import 'package:audioplayers/audioplayers.dart';

class SoundService {
  static final AudioPlayer _player = AudioPlayer();
  static bool _enabled = true;

  static void setEnabled(bool enabled) {
    _enabled = enabled;
  }

  static Future<void> play(String soundName) async {
    if (!_enabled) return;
    try {
      await _player.play(AssetSource('sounds/$soundName.mp3'));
    } catch (e) {
      // Silently fail if sound doesn't load
    }
  }

  static Future<void> playWhoosh() => play('whoosh');
  static Future<void> playSelect() => play('select');
  static Future<void> playConnect() => play('connect');
  static Future<void> playSkip() => play('skip');
  static Future<void> playType() => play('type');
  static Future<void> playSuccess() => play('success');
}
```

## Implementation Points

### Already Marked in Code

The onboarding file has TODO comments where sounds should play:

1. **`_skipToSelection()`** - Line ~152
```dart
_skipToSelection() {
  setState(() {
    _currentStage = 0;
  });
  _stageTransitionController.forward(from: 0);
  // TODO: Play whoosh sound effect here
  SoundService.playWhoosh();  // <-- Add this
}
```

2. **`_nextStage()`** - Line ~164
```dart
_nextStage() {
  setState(() {
    if (_currentStage == 0) {
      if (_selectedApps.isEmpty) {
        // TODO: Play success sound effect here
        SoundService.playSuccess();  // <-- Add this
        context.go('/home');
      } else {
        _currentStage = 1;
      }
    } else if (_currentStage <= _selectedApps.length) {
      if (_currentStage >= _selectedApps.length) {
        // TODO: Play success sound effect here
        SoundService.playSuccess();  // <-- Add this
        context.go('/home');
      } else {
        _currentStage++;
      }
    }
  });
  _stageTransitionController.forward(from: 0);
}
```

3. **`_skipCurrentApp()`** - Line ~187
```dart
void _skipCurrentApp() {
  // TODO: Play skip sound effect here
  SoundService.playSkip();  // <-- Add this
  _nextStage();
}
```

4. **`_connectCurrentApp()`** - Line ~191
```dart
void _connectCurrentApp() {
  final currentApp = _selectedAppsList[_currentStage - 1];
  setState(() {
    _connectedApps.add(currentApp.name);
  });
  // TODO: Play connect sound effect here
  SoundService.playConnect();  // <-- Add this
  _nextStage();
}
```

5. **Search TextField `onChanged`** - Line ~595
```dart
onChanged: (value) {
  setState(() {
    _searchQuery = value;
  });
  // TODO: Play typing sound effect here (subtle)
  // SoundService.playType();  // Optional - might be annoying
},
```

6. **App Selection Tap** - Line ~720
```dart
onTap: () {
  setState(() {
    if (isSelected) {
      _selectedApps.remove(app.name);
    } else {
      _selectedApps.add(app.name);
      // TODO: Play selection sound effect here
      SoundService.playSelect();  // <-- Add this
    }
  });
},
```

7. **Skip for now (selection stage)** - Line ~648
```dart
onPressed: () {
  // TODO: Play skip sound effect here
  SoundService.playSkip();  // <-- Add this
  context.go('/home');
},
```

8. **Continue/Connect button** - Line ~663
```dart
onPressed: () {
  // TODO: Play success sound effect here
  SoundService.playSuccess();  // <-- Add this
  _nextStage();
},
```

## Sound Effect Recommendations

### Free Sound Resources
- **Freesound.org** - CC-licensed sounds
- **Zapsplat.com** - Free with attribution
- **Mixkit.co** - Royalty-free sounds

### Sound Characteristics
- **Whoosh**: 200-300ms, soft swoosh
- **Select**: 50-100ms, subtle click/pop
- **Connect**: 300-500ms, success chime
- **Skip**: 150-250ms, neutral tone
- **Type**: 30-50ms, very quiet tap
- **Success**: 500-800ms, triumphant chime

## macOS Permissions

Add to `macos/Runner/DebugProfile.entitlements` and `Release.entitlements`:
```xml
<key>com.apple.security.files.user-selected.read-only</key>
<true/>
```

## iOS Permissions

No special permissions needed for playing local asset sounds.

## Best Practices

1. **Volume**: Keep sounds subtle (50-70% volume)
2. **Duration**: Keep sounds short (<500ms for most)
3. **Optional**: Add settings toggle to disable sounds
4. **Testing**: Test on actual devices, not just simulators
5. **Accessibility**: Don't rely solely on sounds for feedback

## Optional: Haptic Feedback

For iOS devices, add haptic feedback instead of/in addition to sounds:

```dart
import 'package:flutter/services.dart';

class HapticService {
  static void light() => HapticFeedback.lightImpact();
  static void medium() => HapticFeedback.mediumImpact();
  static void heavy() => HapticFeedback.heavyImpact();
  static void selection() => HapticFeedback.selectionClick();
}
```

Use alongside sounds:
```dart
_connectCurrentApp() {
  // ... code ...
  SoundService.playConnect();
  HapticService.medium();  // Add haptic for mobile
  _nextStage();
}
```

## Future Enhancements

- Add volume control in settings
- Add sound theme selection
- Add accessibility option for stronger audio cues
- Add spatial audio for directions (left/right panning)

---

**Note**: All TODO comments are already in the code at the appropriate locations. Simply follow this guide to add the sound functionality when ready!
