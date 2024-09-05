import { ExpediaGroupLogger, LoggingLevel, DefaultLogger } from '../../../src/core/logging/Logger';
import { SdkLogger, getLogger, LoggerProvider } from '../../../src/core/logging/LoggerProvider';
import { CustomLogger } from '../helper/CustomLogger';

describe('LoggerProvider', function() {
  it('should log when custom logger provided before instantiating logger', async function() {
    const customLogger: CustomLogger = new CustomLogger();
    LoggerProvider.setLogger(customLogger);
    const customLogSpy = jest.spyOn(customLogger, 'info');

    const log: SdkLogger = getLogger(SdkLogger);

    const message = 'some message';
    log.info(message);

    expect(customLogSpy).toHaveBeenCalledWith(`ExpediaGroupSDK - Function: ${message}`);
  });

  it('should log when custom logger provided after instantiating logger', async function() {
    const log: SdkLogger = getLogger(SdkLogger);

    const customLogger: CustomLogger = new CustomLogger();
    LoggerProvider.setLogger(customLogger);
    const customLogSpy = jest.spyOn(customLogger, 'info');

    const message = 'some message';
    log.info(message);

    expect(customLogSpy).toHaveBeenCalledWith(`ExpediaGroupSDK - Function: ${message}`);
  });

  it('should change logging level when prompted', () => {
    LoggerProvider.setLogger(ExpediaGroupLogger);
    const defaultLogSpy = jest.spyOn(ExpediaGroupLogger, 'setLoggingLevel');

    const levels: LoggingLevel[] = ['info', 'warn', 'error'];
    for (const level of levels) {
      ExpediaGroupLogger.setLoggingLevel(level);
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const loggingLevel: string = (LoggerProvider.getLogger() as DefaultLogger)['logger'].level;
      expect(loggingLevel).toEqual(level);
      expect(defaultLogSpy).toHaveBeenCalledWith(level);
    }
  });
});
