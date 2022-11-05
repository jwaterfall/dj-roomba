import chalk from 'chalk';

export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
}

class Logger {
  constructor(private logLevel: LogLevel) {}

  public error(...messages: any[]) {
    if (this.logLevel < LogLevel.ERROR) return;
    this.log('ERROR', ...messages);
  }

  public warn(...messages: any[]) {
    if (this.logLevel < LogLevel.WARN) return;
    this.log('WARN', ...messages);
  }

  public info(...messages: any[]) {
    if (this.logLevel < LogLevel.INFO) return;
    this.log('INFO', ...messages);
  }

  public debug(...messages: any[]) {
    if (this.logLevel < LogLevel.DEBUG) return;
    this.log('DEBUG', ...messages);
  }

  private log(level: string, ...messages: any[]) {
    console.log(chalk.yellow(`[${new Date().toLocaleString()}]`), chalk.cyan(`[${level}]`), ...messages);
  }
}

export default Logger;
