export default function subscribeMockRequests(mockApi) {
  mockApi
    .onAny()
    .passThrough();
}
