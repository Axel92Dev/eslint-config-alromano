export interface LoginWithMessageRouter {
  toLoginWithMessage(params: { key: string }): void;
  toLoginWithError(params: { key: string }): void;
}

export interface ClientParams<REQUEST> {
  url: string;
  body?: REQUEST;
}

export interface HttpClient<REQUEST, RESPONSE> {
  post(params: ClientParams<REQUEST>): Promise<RESPONSE>;
}

interface ActivateNewsletterUseCase {
  execute(token: string): Promise<void>;
}

interface ActivateNewsletterUseCaseFactory {
  (
    router: LoginWithMessageRouter,
    activateNewsletterService: HttpClient<{ token: string }, void>
  ): ActivateNewsletterUseCase;
}

export const createActivateNewsletterUseCase: ActivateNewsletterUseCaseFactory = (
  router,
  activateNewsletterService
) => {
  return {
    // should raise WARN @typescript-eslint/explicit-function-return-type
    async execute(token) {
      try {
        await activateNewsletterService.post({ url: '/cia-be/api/v1/newsletters/activate', body: { token } });
        router.toLoginWithMessage({
          key: 'customer_area.cia.profile.activate.newsletter.ok',
        });
      } catch (e) {
        router.toLoginWithError({
          key: 'customer_area.cia.profile.activate.newsletter.ko',
        });
      }
    },
  };
};
