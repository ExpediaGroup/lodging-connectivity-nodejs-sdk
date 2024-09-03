import { ExpediaGroupLogger } from '../../../src/core/logging/Logger';
import { getLogger, SdkLogger } from '../../../src/core/logging/LoggerProvider';

describe('ExpediaGroupLogger', function() {
  it('should prepend info logging', async function() {
    const log: SdkLogger = getLogger(SdkLogger);
    const logSpy = jest.spyOn(log, 'info');
    const defaultLogSpy = jest.spyOn(ExpediaGroupLogger, 'info');

    const message = 'some message';
    log.info(message);

    expect(logSpy).toHaveBeenCalledWith(message);
    expect(defaultLogSpy).toHaveBeenCalledWith(`ExpediaGroupSDK - Function: ${message}`);
  });

  it('should prepend warn logging', async function() {
    const log: SdkLogger = getLogger(SdkLogger);
    const logSpy = jest.spyOn(log, 'warn');
    const defaultLogSpy = jest.spyOn(ExpediaGroupLogger, 'warn');

    const message = 'some message';
    log.warn(message);

    expect(logSpy).toHaveBeenCalledWith(message);
    expect(defaultLogSpy).toHaveBeenCalledWith(`ExpediaGroupSDK - Function: ${message}`);
  });

  it('should prepend error logging', async function() {
    const log: SdkLogger = getLogger(SdkLogger);
    const logSpy = jest.spyOn(log, 'error');
    const defaultLogSpy = jest.spyOn(ExpediaGroupLogger, 'error');

    const message = 'some message';
    log.error(message);

    expect(logSpy).toHaveBeenCalledWith(message);
    expect(defaultLogSpy).toHaveBeenCalledWith(`ExpediaGroupSDK - Function: ${message}`);
  });
});
