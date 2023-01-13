const p: [number, number, number][] = [
	[2.709080934524536, -1.9362084865570068, -1.0364959239959717],
	[2.923645257949829, 1.1126995086669922, 1.5516517162322998],
	[0.5295989513397217, 3.0490918159484863, 0.1415269374847412],
	[-1.4740893840789795, 1.233896255493164, -3.516988515853882],
	[-2.124799966812134, 0.3458544611930847, -4.8596062660217285],
	[-1.0827465057373047, -0.8037613034248352, -4.489010810852051],
	[-0.7635605335235596, 0.03742170333862305, -3.5328845977783203],
	[-1.1618667840957642, -0.4031369686126709, -3.6103110313415527],
	[-1.5830864906311035, 0.296390175819397, -3.8527112007141113],
	[-1.7283073663711548, -0.2046224325895309, -4.165205001831055]
]

const c: [number, number, number][] = [
	[0.709730934524536, -1.9362084865570068, 1.0364959239959717],
	[1.929145257949829, -1.1126995086669922, 0.5516517162322998],
	[2.5256789513397217, 2.0490918159484863, 1.1415269374847412]
]

interface IDistancesPoints {
	distance: number;
	point: [number, number, number];
}

groupPoints(c, p)

function groupPoints(centers: [number, number, number][], points: [number, number, number][]) {
	const distances = getDistances(centers, points);

	return getGroups(distances);
}

function getDistances(centers: [number, number, number][], points: [number, number, number][]): IDistancesPoints[][] {
	return centers.map(center => points.map(point => ({
		distance: getDistance(center, point),
		point,
	})));
}

function getDistance(point: [number, number, number], secondPoint: [number, number, number]) {
	return Math.sqrt(Math.pow(point[0] - secondPoint[0], 2) + Math.pow(point[1] - secondPoint[1], 2) + Math.pow(point[2] - secondPoint[2], 2));
}

function getGroups(distancesToPoints: IDistancesPoints[][]): [number, number, number][][] {
	const result: [number, number, number][][] = [];
	distancesToPoints.forEach((x, i) => result[i] = []);

	distancesToPoints.forEach((_distancesToPoint, i) => {
		const distances: number[] = [];
		const point: [number, number, number] = distancesToPoints[0][i]?.point;

		distancesToPoints.forEach(x => {
			distances.push(x[i]?.distance as number);
		});

		const index = getIndexFrom(distances);
		result[i]?.push(point as [number, number, number]);
	});

	return result;
}

function getIndexFrom(points: number[]): number {
	return points.reduce((x, y, i) => {
		if (x.lessDistance > y) {
			x.lessDistance = y;
			x.lessIndex = i;
		}

		return x;
	},
		{
			lessDistance: Number.MAX_VALUE,
			lessIndex: 0,
		}).lessIndex;
}