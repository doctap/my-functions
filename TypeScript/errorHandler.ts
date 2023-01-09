export interface HandlerResult<TResult> {
	result: TResult | null;
	isError: boolean;
	errorMessage: string;
	statusCode?: number;
}

export default async function errorHandler<TParam, TResult>(requestFunc: (params: TParam) => Promise<TResult>,
	objParams: TParam): Promise<HandlerResult<TResult>> {
	try {
		return {
			result: await requestFunc(objParams),
			isError: false,
			errorMessage: "",
		}
	}
	catch (ex: any) {

		const response = ex.response;

		return {
			result: null,
			isError: true,
			errorMessage: response.status !== 401 ? `${response.statusText} ${response.status}` : `Неверный ключ!`,
			statusCode: response.status,
		}
	}
}