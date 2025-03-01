
type Stack = {
  stackTimerEnabled: boolean;
  showSerialStatusEnabled: boolean;
}

type SmartTimer = {
  smartTimerEnabled: boolean;
  showBluetoothStatusEnabled: boolean;
}

type Behavior = {
  inspectionStartByResetEnabled: boolean;
}

export type StackTimer = {
  stackTimer: Stack;
  smartTimer: SmartTimer;
  behavior: Behavior;
}
