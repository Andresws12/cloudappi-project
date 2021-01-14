import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
    customSnapshotsDir: '/tests/e2e/snapshots',
    failureThreshold: 0.01,
});
