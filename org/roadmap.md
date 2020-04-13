
# 2020 Q1 (Jan-Mar)

## Increase Stable Test Coverage Velocity 100% over 2019 (Score:0.4)

We have the remaining 16 endpoints already soaking in the two weeks no flakes window.

We are confident they will merge shortly.

### KR1=0.4 (11/+27) new conformant stable endpoints

-   SCORE CALCULATION: 0.4 -> 1.0

    Done(11)
    
    -   Needs Two Weeks(16) = 27 -> 1.0

### kr2=0.4 +6% coverage increase

-   SCORE CALCULATION: 0.4 -> 1.0

    This number should increase to the full 6% in ~2 weeks.

## complete cncf/apisnoop prow.k8s.io + Amazon migration (Score:0.5)

### KR1=0.5 All cncf/apisnoop artifacts created by prow.k8s.io

Definitions in prow, but need to do our Q1 release&#x2026; this week.

### KR2=0.0 All cncf/apisnoop github workflow managed by prow.k8s.io

-   [ ] PR Merged managed via prow (VS pushing to master or manual merging)

### KR3=1.0 All cncf/apisnoop non-prow infra moved to Amazon/Packet

We aren't hosting anything on Google (except via prow).

Everything is on EKS on Packet!

## Mentor/Teach test-writing workflow at Contributer Summit / KubeConEU (Score:0.5)

### KR1=0.0 Caleb and Hippie Mentoring at Contributor Summit

I am pairing weekly with with k8s community members.

To ensure the workflow is accessible.

Caleb is mentoring Zach and Stephen.

### KR2 1.0 Zach and Stephen teaching test writing

They in turn are teaching Riaan

all remote

using our org-flow

# 2020 Q2 (Apr-Jun)

May realign to match the k8s release cycle.

## Prepare to Gate cncf/k8s-conformance PRs

### KR1 Setup prow.cncf.io

This repo is outside kubernetes org.

We'll need to set this up in a sustainable/supportable way.

### KR2 Connect cncf/k8s-conformance to prow.cncf.io

Comments and admin actions from prow.cncf.io

Will be made using the [cncf-ci](https://github.com/cncf-ci) bot/github account.

### KR3 gate+comment w/ list of unrun conformance tests

Defined by the [user stories for KEP-960](https://github.com/kubernetes/enhancements/blob/2c19ec7627e326d1c75306dcaa3d2f14002301fa/keps/sig-architecture/960-conformance-behaviors/README.md#role-cncf-conformance-program)

    Must confirm that the version of the tests being run matches...
    Must confirm the set of tests being run matches...
    Must confirm that all behaviors are covered by a test...

## Prepare to Gate k/k PRs touching test/e2e or API

Influenced by [Behavior KEP user stories](https://github.com/kubernetes/enhancements/pull/1666/files?short_path=92a9412#diff-92a9412ae55358378bc66295cdbea103)

while continuing to focus on endpoints.

-   We should donate APISnoop to sig-arch

### KR1 Identify a PR as requiring conformance review

PR must touch file in conformance-specific directory

-   (initially /area-conformance + /sig-arch)

    eg: update test/conformance/behaviors/..
    eg: mv from test/e2e to test/conformance

### KR2 Identify list of endpoints added/removed

Tooling will compare `path/operation_id` in `api/openapi-spec/swagger.json`

### KR3 Run APISnoop against PR to generate endpoint coverage

Tooling will provide a list of tested and conformant endpoints.

### KR4 bot comment w/ list of increase/decrease of endpoints

Tooling will comment directly on PR

-   alpha : comment endpoints needing tests
-   beta : comment endpoints needing tests
-   stable : comment and block via tag

## Increase Stable Test Coverage Velocity 50% over Q1

### KR1 (0/+40) new conformant stable endpoints

### KR2 +9% Coverage Increase

### KR3 (stretch) 50% stable endpoints hit by conformance tests